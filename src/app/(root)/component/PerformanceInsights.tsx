'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

type IdleWindow = Window & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
    cancelIdleCallback?: (handle: number) => void;
};

export default function PerformanceInsights() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            return;
        }

        let cancelled = false;
        const win = window as IdleWindow;

        const onIdle = () => {
            if (!cancelled) {
                setShouldLoad(true);
            }
        };

        if (win.requestIdleCallback) {
            const idleHandle = win.requestIdleCallback(onIdle, { timeout: 3000 });
            return () => {
                cancelled = true;
                if (win.cancelIdleCallback) {
                    win.cancelIdleCallback(idleHandle);
                }
            };
        }

        const timeoutHandle = window.setTimeout(onIdle, 1500);
        return () => {
            cancelled = true;
            window.clearTimeout(timeoutHandle);
        };
    }, []);

    if (process.env.NODE_ENV !== 'production' || !shouldLoad) {
        return null;
    }

    return (
        <>
            <Analytics />
            <SpeedInsights />
        </>
    );
}

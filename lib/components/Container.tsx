import { css } from "@/styled-system/css"

export default function Container({ children }: { children?: React.ReactNode }) {
    return (
        <div className={container}>
            <div className={main}>
                {children}
            </div>
        </div>
    )
}

const container = css({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #24c6dc, #514a9d)'
})

const main = css({
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    borderRadius: '15px',
    padding: '20px',
    backgroundColor: 'background'
});
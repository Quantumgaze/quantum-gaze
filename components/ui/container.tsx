interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (w
        <div className="mx-auto" style={{ maxWidth: '110rem' }}>
            {children}
        </div>
    )
}

export default Container
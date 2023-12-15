import Container from '@/components/ui/container'
import { UserButton } from '@clerk/nextjs'

const MyHomePage = () => {
    return (
        <Container>
            <div>
                This is a protected route
            </div>
            <UserButton afterSignOutUrl='/'></UserButton>
        </Container>
    )
}

export default MyHomePage
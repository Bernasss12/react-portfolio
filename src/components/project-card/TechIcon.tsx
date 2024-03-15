import * as React from 'react';
import {SiAngular, SiJavascript, SiLinkedin, SiMaterialdesign, SiPython, SiReact, SiTypescript} from "react-icons/si";
import {FaJava, FaQuestionCircle} from "react-icons/fa";

type Props = {
    size?: number
    tooltip?: string
    icon: string
    className?: string
};

function TechIcon({size, icon, className, tooltip}: Props) {
    const techToIcon: Record<string, JSX.Element> = {
        'react': <SiReact/>,
        'typescript': <SiTypescript/>,
        'linkedin': <SiLinkedin/>,
        'javascript': <SiJavascript/>,
        'materialdesign': <SiMaterialdesign/>,
        'java': <FaJava/>,
        'angular': <SiAngular/>,
        'python': <SiPython/>
    };

    function cleanup(string: string): string {
        return string.replace(/ _-/g, '').toLowerCase();
    }

    function getIcon(icon: string): JSX.Element {
        const cleanIcon = cleanup(icon);
        return techToIcon[cleanIcon] || <FaQuestionCircle/>;
    }

    // const renderTooltip = (props: any) => (
    //     console.log("Show tooltip"),
    //     <Tooltip id="button-tooltip" {...props}>
    //         {tooltip}
    //     </Tooltip>
    // );

    return (
        <></>
        // <div className="tech-icon">
        //     {/*{tooltip ?*/}
        //     {/*    <OverlayTrigger*/}
        //     {/*        placement="right"*/}
        //     {/*        delay={{ show: 100, hide: 100 }}*/}
        //     {/*        overlay={renderTooltip}>*/}
        //     {/*        <div>{React.cloneElement(getIcon(icon), {size: size, className: className})}</div>*/}
        //     {/*    </OverlayTrigger>*/}
        //     {/*    :*/}
        //         React.cloneElement(getIcon(icon), {size: size, className: className})
        //     {/*}*/}
        // </div>
    );
}

export default TechIcon;
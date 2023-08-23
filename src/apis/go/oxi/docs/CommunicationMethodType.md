# CommunicationMethodType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfaceId** | Pointer to **string** | OXI Interface ID | [optional] 
**HotelId** | Pointer to **string** | SID-RESORT for Global Level and HotelId associated with the interface for the Property Level configuration. | [optional] 
**CommunicationType** | Pointer to [**CommunicationType**](CommunicationType.md) |  | [optional] 
**CommunicationFlow** | Pointer to **string** | Attribute represents the communication flow like UPLOAD,DOWNLOAD. | [optional] 
**NoCommunication** | Pointer to [**CommunicationMethodNoneType**](CommunicationMethodNoneType.md) |  | [optional] 
**HTTPS** | Pointer to [**CommunicationMethodHTTPSType**](CommunicationMethodHTTPSType.md) |  | [optional] 
**AllowedComTypes** | Pointer to **string** | Attribute that indicates whether the communication type allowed or not. | [optional] 
**DisplayText** | Pointer to **string** | Attribute represents Description of Communication Flow | [optional] 
**RetryCount** | Pointer to **int32** | Attribute represents Retry Count | [optional] 
**RetryInterval** | Pointer to **int32** | Attribute represents Interval in seconds between retries | [optional] 
**StartTime** | Pointer to **string** | Attribute represents Upload start time in HH:MI 24 hrs format | [optional] 
**NoOfDaysToKeep** | Pointer to **int32** | Attribute represents Number of days files to be kept in the backup folder | [optional] 
**VersionNumber** | Pointer to **string** | Attribute represents Version Number of the PM System. | [optional] 
**SystemType** | Pointer to **string** | Attribute represents System Type(Production/Test) | [optional] 
**ChainCode** | Pointer to **string** | Chain code. | [optional] 

## Methods

### NewCommunicationMethodType

`func NewCommunicationMethodType() *CommunicationMethodType`

NewCommunicationMethodType instantiates a new CommunicationMethodType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunicationMethodTypeWithDefaults

`func NewCommunicationMethodTypeWithDefaults() *CommunicationMethodType`

NewCommunicationMethodTypeWithDefaults instantiates a new CommunicationMethodType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfaceId

`func (o *CommunicationMethodType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *CommunicationMethodType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *CommunicationMethodType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *CommunicationMethodType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetHotelId

`func (o *CommunicationMethodType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CommunicationMethodType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CommunicationMethodType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CommunicationMethodType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCommunicationType

`func (o *CommunicationMethodType) GetCommunicationType() CommunicationType`

GetCommunicationType returns the CommunicationType field if non-nil, zero value otherwise.

### GetCommunicationTypeOk

`func (o *CommunicationMethodType) GetCommunicationTypeOk() (*CommunicationType, bool)`

GetCommunicationTypeOk returns a tuple with the CommunicationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationType

`func (o *CommunicationMethodType) SetCommunicationType(v CommunicationType)`

SetCommunicationType sets CommunicationType field to given value.

### HasCommunicationType

`func (o *CommunicationMethodType) HasCommunicationType() bool`

HasCommunicationType returns a boolean if a field has been set.

### GetCommunicationFlow

`func (o *CommunicationMethodType) GetCommunicationFlow() string`

GetCommunicationFlow returns the CommunicationFlow field if non-nil, zero value otherwise.

### GetCommunicationFlowOk

`func (o *CommunicationMethodType) GetCommunicationFlowOk() (*string, bool)`

GetCommunicationFlowOk returns a tuple with the CommunicationFlow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationFlow

`func (o *CommunicationMethodType) SetCommunicationFlow(v string)`

SetCommunicationFlow sets CommunicationFlow field to given value.

### HasCommunicationFlow

`func (o *CommunicationMethodType) HasCommunicationFlow() bool`

HasCommunicationFlow returns a boolean if a field has been set.

### GetNoCommunication

`func (o *CommunicationMethodType) GetNoCommunication() CommunicationMethodNoneType`

GetNoCommunication returns the NoCommunication field if non-nil, zero value otherwise.

### GetNoCommunicationOk

`func (o *CommunicationMethodType) GetNoCommunicationOk() (*CommunicationMethodNoneType, bool)`

GetNoCommunicationOk returns a tuple with the NoCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoCommunication

`func (o *CommunicationMethodType) SetNoCommunication(v CommunicationMethodNoneType)`

SetNoCommunication sets NoCommunication field to given value.

### HasNoCommunication

`func (o *CommunicationMethodType) HasNoCommunication() bool`

HasNoCommunication returns a boolean if a field has been set.

### GetHTTPS

`func (o *CommunicationMethodType) GetHTTPS() CommunicationMethodHTTPSType`

GetHTTPS returns the HTTPS field if non-nil, zero value otherwise.

### GetHTTPSOk

`func (o *CommunicationMethodType) GetHTTPSOk() (*CommunicationMethodHTTPSType, bool)`

GetHTTPSOk returns a tuple with the HTTPS field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHTTPS

`func (o *CommunicationMethodType) SetHTTPS(v CommunicationMethodHTTPSType)`

SetHTTPS sets HTTPS field to given value.

### HasHTTPS

`func (o *CommunicationMethodType) HasHTTPS() bool`

HasHTTPS returns a boolean if a field has been set.

### GetAllowedComTypes

`func (o *CommunicationMethodType) GetAllowedComTypes() string`

GetAllowedComTypes returns the AllowedComTypes field if non-nil, zero value otherwise.

### GetAllowedComTypesOk

`func (o *CommunicationMethodType) GetAllowedComTypesOk() (*string, bool)`

GetAllowedComTypesOk returns a tuple with the AllowedComTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedComTypes

`func (o *CommunicationMethodType) SetAllowedComTypes(v string)`

SetAllowedComTypes sets AllowedComTypes field to given value.

### HasAllowedComTypes

`func (o *CommunicationMethodType) HasAllowedComTypes() bool`

HasAllowedComTypes returns a boolean if a field has been set.

### GetDisplayText

`func (o *CommunicationMethodType) GetDisplayText() string`

GetDisplayText returns the DisplayText field if non-nil, zero value otherwise.

### GetDisplayTextOk

`func (o *CommunicationMethodType) GetDisplayTextOk() (*string, bool)`

GetDisplayTextOk returns a tuple with the DisplayText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayText

`func (o *CommunicationMethodType) SetDisplayText(v string)`

SetDisplayText sets DisplayText field to given value.

### HasDisplayText

`func (o *CommunicationMethodType) HasDisplayText() bool`

HasDisplayText returns a boolean if a field has been set.

### GetRetryCount

`func (o *CommunicationMethodType) GetRetryCount() int32`

GetRetryCount returns the RetryCount field if non-nil, zero value otherwise.

### GetRetryCountOk

`func (o *CommunicationMethodType) GetRetryCountOk() (*int32, bool)`

GetRetryCountOk returns a tuple with the RetryCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryCount

`func (o *CommunicationMethodType) SetRetryCount(v int32)`

SetRetryCount sets RetryCount field to given value.

### HasRetryCount

`func (o *CommunicationMethodType) HasRetryCount() bool`

HasRetryCount returns a boolean if a field has been set.

### GetRetryInterval

`func (o *CommunicationMethodType) GetRetryInterval() int32`

GetRetryInterval returns the RetryInterval field if non-nil, zero value otherwise.

### GetRetryIntervalOk

`func (o *CommunicationMethodType) GetRetryIntervalOk() (*int32, bool)`

GetRetryIntervalOk returns a tuple with the RetryInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryInterval

`func (o *CommunicationMethodType) SetRetryInterval(v int32)`

SetRetryInterval sets RetryInterval field to given value.

### HasRetryInterval

`func (o *CommunicationMethodType) HasRetryInterval() bool`

HasRetryInterval returns a boolean if a field has been set.

### GetStartTime

`func (o *CommunicationMethodType) GetStartTime() string`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *CommunicationMethodType) GetStartTimeOk() (*string, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *CommunicationMethodType) SetStartTime(v string)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *CommunicationMethodType) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetNoOfDaysToKeep

`func (o *CommunicationMethodType) GetNoOfDaysToKeep() int32`

GetNoOfDaysToKeep returns the NoOfDaysToKeep field if non-nil, zero value otherwise.

### GetNoOfDaysToKeepOk

`func (o *CommunicationMethodType) GetNoOfDaysToKeepOk() (*int32, bool)`

GetNoOfDaysToKeepOk returns a tuple with the NoOfDaysToKeep field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfDaysToKeep

`func (o *CommunicationMethodType) SetNoOfDaysToKeep(v int32)`

SetNoOfDaysToKeep sets NoOfDaysToKeep field to given value.

### HasNoOfDaysToKeep

`func (o *CommunicationMethodType) HasNoOfDaysToKeep() bool`

HasNoOfDaysToKeep returns a boolean if a field has been set.

### GetVersionNumber

`func (o *CommunicationMethodType) GetVersionNumber() string`

GetVersionNumber returns the VersionNumber field if non-nil, zero value otherwise.

### GetVersionNumberOk

`func (o *CommunicationMethodType) GetVersionNumberOk() (*string, bool)`

GetVersionNumberOk returns a tuple with the VersionNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionNumber

`func (o *CommunicationMethodType) SetVersionNumber(v string)`

SetVersionNumber sets VersionNumber field to given value.

### HasVersionNumber

`func (o *CommunicationMethodType) HasVersionNumber() bool`

HasVersionNumber returns a boolean if a field has been set.

### GetSystemType

`func (o *CommunicationMethodType) GetSystemType() string`

GetSystemType returns the SystemType field if non-nil, zero value otherwise.

### GetSystemTypeOk

`func (o *CommunicationMethodType) GetSystemTypeOk() (*string, bool)`

GetSystemTypeOk returns a tuple with the SystemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemType

`func (o *CommunicationMethodType) SetSystemType(v string)`

SetSystemType sets SystemType field to given value.

### HasSystemType

`func (o *CommunicationMethodType) HasSystemType() bool`

HasSystemType returns a boolean if a field has been set.

### GetChainCode

`func (o *CommunicationMethodType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *CommunicationMethodType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *CommunicationMethodType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *CommunicationMethodType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



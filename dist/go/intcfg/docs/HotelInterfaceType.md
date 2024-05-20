# HotelInterfaceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code | [optional] 
**InterfaceName** | Pointer to **string** | Name of the Hotel Interface | [optional] 
**InterfaceType** | Pointer to [**HotelInterfaceTypeType**](HotelInterfaceTypeType.md) |  | [optional] 
**Logo** | Pointer to **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | [optional] 
**MachineName** | Pointer to **string** | Unique machine name of the running IFC. | [optional] 
**Status** | Pointer to [**HotelInterfaceStatusType**](HotelInterfaceStatusType.md) |  | [optional] 
**ActiveFlag** | Pointer to **bool** | Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING. | [optional] 
**OutboundCode** | Pointer to **string** | Stores the Outbound Code to identify the target system. | [optional] 

## Methods

### NewHotelInterfaceType

`func NewHotelInterfaceType() *HotelInterfaceType`

NewHotelInterfaceType instantiates a new HotelInterfaceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelInterfaceTypeWithDefaults

`func NewHotelInterfaceTypeWithDefaults() *HotelInterfaceType`

NewHotelInterfaceTypeWithDefaults instantiates a new HotelInterfaceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfaceId

`func (o *HotelInterfaceType) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *HotelInterfaceType) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *HotelInterfaceType) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *HotelInterfaceType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelInterfaceType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelInterfaceType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelInterfaceType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelInterfaceType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInterfaceName

`func (o *HotelInterfaceType) GetInterfaceName() string`

GetInterfaceName returns the InterfaceName field if non-nil, zero value otherwise.

### GetInterfaceNameOk

`func (o *HotelInterfaceType) GetInterfaceNameOk() (*string, bool)`

GetInterfaceNameOk returns a tuple with the InterfaceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceName

`func (o *HotelInterfaceType) SetInterfaceName(v string)`

SetInterfaceName sets InterfaceName field to given value.

### HasInterfaceName

`func (o *HotelInterfaceType) HasInterfaceName() bool`

HasInterfaceName returns a boolean if a field has been set.

### GetInterfaceType

`func (o *HotelInterfaceType) GetInterfaceType() HotelInterfaceTypeType`

GetInterfaceType returns the InterfaceType field if non-nil, zero value otherwise.

### GetInterfaceTypeOk

`func (o *HotelInterfaceType) GetInterfaceTypeOk() (*HotelInterfaceTypeType, bool)`

GetInterfaceTypeOk returns a tuple with the InterfaceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceType

`func (o *HotelInterfaceType) SetInterfaceType(v HotelInterfaceTypeType)`

SetInterfaceType sets InterfaceType field to given value.

### HasInterfaceType

`func (o *HotelInterfaceType) HasInterfaceType() bool`

HasInterfaceType returns a boolean if a field has been set.

### GetLogo

`func (o *HotelInterfaceType) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *HotelInterfaceType) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *HotelInterfaceType) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *HotelInterfaceType) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetMachineName

`func (o *HotelInterfaceType) GetMachineName() string`

GetMachineName returns the MachineName field if non-nil, zero value otherwise.

### GetMachineNameOk

`func (o *HotelInterfaceType) GetMachineNameOk() (*string, bool)`

GetMachineNameOk returns a tuple with the MachineName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineName

`func (o *HotelInterfaceType) SetMachineName(v string)`

SetMachineName sets MachineName field to given value.

### HasMachineName

`func (o *HotelInterfaceType) HasMachineName() bool`

HasMachineName returns a boolean if a field has been set.

### GetStatus

`func (o *HotelInterfaceType) GetStatus() HotelInterfaceStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *HotelInterfaceType) GetStatusOk() (*HotelInterfaceStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *HotelInterfaceType) SetStatus(v HotelInterfaceStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *HotelInterfaceType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetActiveFlag

`func (o *HotelInterfaceType) GetActiveFlag() bool`

GetActiveFlag returns the ActiveFlag field if non-nil, zero value otherwise.

### GetActiveFlagOk

`func (o *HotelInterfaceType) GetActiveFlagOk() (*bool, bool)`

GetActiveFlagOk returns a tuple with the ActiveFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveFlag

`func (o *HotelInterfaceType) SetActiveFlag(v bool)`

SetActiveFlag sets ActiveFlag field to given value.

### HasActiveFlag

`func (o *HotelInterfaceType) HasActiveFlag() bool`

HasActiveFlag returns a boolean if a field has been set.

### GetOutboundCode

`func (o *HotelInterfaceType) GetOutboundCode() string`

GetOutboundCode returns the OutboundCode field if non-nil, zero value otherwise.

### GetOutboundCodeOk

`func (o *HotelInterfaceType) GetOutboundCodeOk() (*string, bool)`

GetOutboundCodeOk returns a tuple with the OutboundCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutboundCode

`func (o *HotelInterfaceType) SetOutboundCode(v string)`

SetOutboundCode sets OutboundCode field to given value.

### HasOutboundCode

`func (o *HotelInterfaceType) HasOutboundCode() bool`

HasOutboundCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



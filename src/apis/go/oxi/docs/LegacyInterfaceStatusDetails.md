# LegacyInterfaceStatusDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfacesStatus** | Pointer to [**[]InterfaceStatusType**](InterfaceStatusType.md) | Collection which contains Interface ID and its details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewLegacyInterfaceStatusDetails

`func NewLegacyInterfaceStatusDetails() *LegacyInterfaceStatusDetails`

NewLegacyInterfaceStatusDetails instantiates a new LegacyInterfaceStatusDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLegacyInterfaceStatusDetailsWithDefaults

`func NewLegacyInterfaceStatusDetailsWithDefaults() *LegacyInterfaceStatusDetails`

NewLegacyInterfaceStatusDetailsWithDefaults instantiates a new LegacyInterfaceStatusDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfacesStatus

`func (o *LegacyInterfaceStatusDetails) GetInterfacesStatus() []InterfaceStatusType`

GetInterfacesStatus returns the InterfacesStatus field if non-nil, zero value otherwise.

### GetInterfacesStatusOk

`func (o *LegacyInterfaceStatusDetails) GetInterfacesStatusOk() (*[]InterfaceStatusType, bool)`

GetInterfacesStatusOk returns a tuple with the InterfacesStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfacesStatus

`func (o *LegacyInterfaceStatusDetails) SetInterfacesStatus(v []InterfaceStatusType)`

SetInterfacesStatus sets InterfacesStatus field to given value.

### HasInterfacesStatus

`func (o *LegacyInterfaceStatusDetails) HasInterfacesStatus() bool`

HasInterfacesStatus returns a boolean if a field has been set.

### GetLinks

`func (o *LegacyInterfaceStatusDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LegacyInterfaceStatusDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LegacyInterfaceStatusDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LegacyInterfaceStatusDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *LegacyInterfaceStatusDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LegacyInterfaceStatusDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LegacyInterfaceStatusDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LegacyInterfaceStatusDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



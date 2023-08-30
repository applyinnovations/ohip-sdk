# FetchExternalInterfaceSetups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalInterfaceSetups** | Pointer to [**[]InterfaceSetupType**](InterfaceSetupType.md) | List of Interface Setups. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchExternalInterfaceSetups

`func NewFetchExternalInterfaceSetups() *FetchExternalInterfaceSetups`

NewFetchExternalInterfaceSetups instantiates a new FetchExternalInterfaceSetups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchExternalInterfaceSetupsWithDefaults

`func NewFetchExternalInterfaceSetupsWithDefaults() *FetchExternalInterfaceSetups`

NewFetchExternalInterfaceSetupsWithDefaults instantiates a new FetchExternalInterfaceSetups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalInterfaceSetups

`func (o *FetchExternalInterfaceSetups) GetExternalInterfaceSetups() []InterfaceSetupType`

GetExternalInterfaceSetups returns the ExternalInterfaceSetups field if non-nil, zero value otherwise.

### GetExternalInterfaceSetupsOk

`func (o *FetchExternalInterfaceSetups) GetExternalInterfaceSetupsOk() (*[]InterfaceSetupType, bool)`

GetExternalInterfaceSetupsOk returns a tuple with the ExternalInterfaceSetups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalInterfaceSetups

`func (o *FetchExternalInterfaceSetups) SetExternalInterfaceSetups(v []InterfaceSetupType)`

SetExternalInterfaceSetups sets ExternalInterfaceSetups field to given value.

### HasExternalInterfaceSetups

`func (o *FetchExternalInterfaceSetups) HasExternalInterfaceSetups() bool`

HasExternalInterfaceSetups returns a boolean if a field has been set.

### GetLinks

`func (o *FetchExternalInterfaceSetups) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchExternalInterfaceSetups) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchExternalInterfaceSetups) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchExternalInterfaceSetups) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchExternalInterfaceSetups) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchExternalInterfaceSetups) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchExternalInterfaceSetups) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchExternalInterfaceSetups) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



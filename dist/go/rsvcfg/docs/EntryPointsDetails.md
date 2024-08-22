# EntryPointsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntryPoints** | Pointer to [**[]EntryPointType**](EntryPointType.md) | List of Entry Points. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewEntryPointsDetails

`func NewEntryPointsDetails() *EntryPointsDetails`

NewEntryPointsDetails instantiates a new EntryPointsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntryPointsDetailsWithDefaults

`func NewEntryPointsDetailsWithDefaults() *EntryPointsDetails`

NewEntryPointsDetailsWithDefaults instantiates a new EntryPointsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntryPoints

`func (o *EntryPointsDetails) GetEntryPoints() []EntryPointType`

GetEntryPoints returns the EntryPoints field if non-nil, zero value otherwise.

### GetEntryPointsOk

`func (o *EntryPointsDetails) GetEntryPointsOk() (*[]EntryPointType, bool)`

GetEntryPointsOk returns a tuple with the EntryPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntryPoints

`func (o *EntryPointsDetails) SetEntryPoints(v []EntryPointType)`

SetEntryPoints sets EntryPoints field to given value.

### HasEntryPoints

`func (o *EntryPointsDetails) HasEntryPoints() bool`

HasEntryPoints returns a boolean if a field has been set.

### GetLinks

`func (o *EntryPointsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EntryPointsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EntryPointsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EntryPointsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EntryPointsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EntryPointsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EntryPointsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EntryPointsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ImmigrationStatusesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ImmigrationStatuses** | Pointer to [**[]ImmigrationStatusType**](ImmigrationStatusType.md) | List of Immigration Statuses. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewImmigrationStatusesToBeChanged

`func NewImmigrationStatusesToBeChanged() *ImmigrationStatusesToBeChanged`

NewImmigrationStatusesToBeChanged instantiates a new ImmigrationStatusesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImmigrationStatusesToBeChangedWithDefaults

`func NewImmigrationStatusesToBeChangedWithDefaults() *ImmigrationStatusesToBeChanged`

NewImmigrationStatusesToBeChangedWithDefaults instantiates a new ImmigrationStatusesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImmigrationStatuses

`func (o *ImmigrationStatusesToBeChanged) GetImmigrationStatuses() []ImmigrationStatusType`

GetImmigrationStatuses returns the ImmigrationStatuses field if non-nil, zero value otherwise.

### GetImmigrationStatusesOk

`func (o *ImmigrationStatusesToBeChanged) GetImmigrationStatusesOk() (*[]ImmigrationStatusType, bool)`

GetImmigrationStatusesOk returns a tuple with the ImmigrationStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImmigrationStatuses

`func (o *ImmigrationStatusesToBeChanged) SetImmigrationStatuses(v []ImmigrationStatusType)`

SetImmigrationStatuses sets ImmigrationStatuses field to given value.

### HasImmigrationStatuses

`func (o *ImmigrationStatusesToBeChanged) HasImmigrationStatuses() bool`

HasImmigrationStatuses returns a boolean if a field has been set.

### GetLinks

`func (o *ImmigrationStatusesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ImmigrationStatusesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ImmigrationStatusesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ImmigrationStatusesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ImmigrationStatusesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ImmigrationStatusesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ImmigrationStatusesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ImmigrationStatusesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



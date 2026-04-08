# ImmigrationStatusesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ImmigrationStatuses** | Pointer to [**[]ImmigrationStatusType**](ImmigrationStatusType.md) | List of Immigration Statuses. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewImmigrationStatusesDetails

`func NewImmigrationStatusesDetails() *ImmigrationStatusesDetails`

NewImmigrationStatusesDetails instantiates a new ImmigrationStatusesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImmigrationStatusesDetailsWithDefaults

`func NewImmigrationStatusesDetailsWithDefaults() *ImmigrationStatusesDetails`

NewImmigrationStatusesDetailsWithDefaults instantiates a new ImmigrationStatusesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImmigrationStatuses

`func (o *ImmigrationStatusesDetails) GetImmigrationStatuses() []ImmigrationStatusType`

GetImmigrationStatuses returns the ImmigrationStatuses field if non-nil, zero value otherwise.

### GetImmigrationStatusesOk

`func (o *ImmigrationStatusesDetails) GetImmigrationStatusesOk() (*[]ImmigrationStatusType, bool)`

GetImmigrationStatusesOk returns a tuple with the ImmigrationStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImmigrationStatuses

`func (o *ImmigrationStatusesDetails) SetImmigrationStatuses(v []ImmigrationStatusType)`

SetImmigrationStatuses sets ImmigrationStatuses field to given value.

### HasImmigrationStatuses

`func (o *ImmigrationStatusesDetails) HasImmigrationStatuses() bool`

HasImmigrationStatuses returns a boolean if a field has been set.

### GetLinks

`func (o *ImmigrationStatusesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ImmigrationStatusesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ImmigrationStatusesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ImmigrationStatusesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ImmigrationStatusesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ImmigrationStatusesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ImmigrationStatusesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ImmigrationStatusesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



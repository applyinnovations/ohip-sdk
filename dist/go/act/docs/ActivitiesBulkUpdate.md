# ActivitiesBulkUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivitiesBulkUpdate** | Pointer to [**ActivitiesBulkUpdateType**](ActivitiesBulkUpdateType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewActivitiesBulkUpdate

`func NewActivitiesBulkUpdate() *ActivitiesBulkUpdate`

NewActivitiesBulkUpdate instantiates a new ActivitiesBulkUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivitiesBulkUpdateWithDefaults

`func NewActivitiesBulkUpdateWithDefaults() *ActivitiesBulkUpdate`

NewActivitiesBulkUpdateWithDefaults instantiates a new ActivitiesBulkUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivitiesBulkUpdate

`func (o *ActivitiesBulkUpdate) GetActivitiesBulkUpdate() ActivitiesBulkUpdateType`

GetActivitiesBulkUpdate returns the ActivitiesBulkUpdate field if non-nil, zero value otherwise.

### GetActivitiesBulkUpdateOk

`func (o *ActivitiesBulkUpdate) GetActivitiesBulkUpdateOk() (*ActivitiesBulkUpdateType, bool)`

GetActivitiesBulkUpdateOk returns a tuple with the ActivitiesBulkUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitiesBulkUpdate

`func (o *ActivitiesBulkUpdate) SetActivitiesBulkUpdate(v ActivitiesBulkUpdateType)`

SetActivitiesBulkUpdate sets ActivitiesBulkUpdate field to given value.

### HasActivitiesBulkUpdate

`func (o *ActivitiesBulkUpdate) HasActivitiesBulkUpdate() bool`

HasActivitiesBulkUpdate returns a boolean if a field has been set.

### GetLinks

`func (o *ActivitiesBulkUpdate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivitiesBulkUpdate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivitiesBulkUpdate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivitiesBulkUpdate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivitiesBulkUpdate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivitiesBulkUpdate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivitiesBulkUpdate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivitiesBulkUpdate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



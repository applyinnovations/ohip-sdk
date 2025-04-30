# SourceGroupCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceGroup** | Pointer to [**SourceGroupType**](SourceGroupType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSourceGroupCriteria

`func NewSourceGroupCriteria() *SourceGroupCriteria`

NewSourceGroupCriteria instantiates a new SourceGroupCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceGroupCriteriaWithDefaults

`func NewSourceGroupCriteriaWithDefaults() *SourceGroupCriteria`

NewSourceGroupCriteriaWithDefaults instantiates a new SourceGroupCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceGroup

`func (o *SourceGroupCriteria) GetSourceGroup() SourceGroupType`

GetSourceGroup returns the SourceGroup field if non-nil, zero value otherwise.

### GetSourceGroupOk

`func (o *SourceGroupCriteria) GetSourceGroupOk() (*SourceGroupType, bool)`

GetSourceGroupOk returns a tuple with the SourceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceGroup

`func (o *SourceGroupCriteria) SetSourceGroup(v SourceGroupType)`

SetSourceGroup sets SourceGroup field to given value.

### HasSourceGroup

`func (o *SourceGroupCriteria) HasSourceGroup() bool`

HasSourceGroup returns a boolean if a field has been set.

### GetLinks

`func (o *SourceGroupCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SourceGroupCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SourceGroupCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SourceGroupCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SourceGroupCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SourceGroupCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SourceGroupCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SourceGroupCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



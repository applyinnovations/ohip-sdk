# RestrictionsByDateRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RestrictionsByDateRange** | Pointer to [**FetchRestrictionsByDateRangeRSType**](FetchRestrictionsByDateRangeRSType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRestrictionsByDateRange

`func NewRestrictionsByDateRange() *RestrictionsByDateRange`

NewRestrictionsByDateRange instantiates a new RestrictionsByDateRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRestrictionsByDateRangeWithDefaults

`func NewRestrictionsByDateRangeWithDefaults() *RestrictionsByDateRange`

NewRestrictionsByDateRangeWithDefaults instantiates a new RestrictionsByDateRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RestrictionsByDateRange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RestrictionsByDateRange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RestrictionsByDateRange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RestrictionsByDateRange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRestrictionsByDateRange

`func (o *RestrictionsByDateRange) GetRestrictionsByDateRange() FetchRestrictionsByDateRangeRSType`

GetRestrictionsByDateRange returns the RestrictionsByDateRange field if non-nil, zero value otherwise.

### GetRestrictionsByDateRangeOk

`func (o *RestrictionsByDateRange) GetRestrictionsByDateRangeOk() (*FetchRestrictionsByDateRangeRSType, bool)`

GetRestrictionsByDateRangeOk returns a tuple with the RestrictionsByDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionsByDateRange

`func (o *RestrictionsByDateRange) SetRestrictionsByDateRange(v FetchRestrictionsByDateRangeRSType)`

SetRestrictionsByDateRange sets RestrictionsByDateRange field to given value.

### HasRestrictionsByDateRange

`func (o *RestrictionsByDateRange) HasRestrictionsByDateRange() bool`

HasRestrictionsByDateRange returns a boolean if a field has been set.

### GetWarnings

`func (o *RestrictionsByDateRange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RestrictionsByDateRange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RestrictionsByDateRange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RestrictionsByDateRange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



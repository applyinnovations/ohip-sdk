# ProfileStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileStatistic** | Pointer to [**ProfileStatisticsType**](ProfileStatisticsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewProfileStatistics

`func NewProfileStatistics() *ProfileStatistics`

NewProfileStatistics instantiates a new ProfileStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileStatisticsWithDefaults

`func NewProfileStatisticsWithDefaults() *ProfileStatistics`

NewProfileStatisticsWithDefaults instantiates a new ProfileStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileStatistic

`func (o *ProfileStatistics) GetProfileStatistic() ProfileStatisticsType`

GetProfileStatistic returns the ProfileStatistic field if non-nil, zero value otherwise.

### GetProfileStatisticOk

`func (o *ProfileStatistics) GetProfileStatisticOk() (*ProfileStatisticsType, bool)`

GetProfileStatisticOk returns a tuple with the ProfileStatistic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileStatistic

`func (o *ProfileStatistics) SetProfileStatistic(v ProfileStatisticsType)`

SetProfileStatistic sets ProfileStatistic field to given value.

### HasProfileStatistic

`func (o *ProfileStatistics) HasProfileStatistic() bool`

HasProfileStatistic returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileStatistics) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileStatistics) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileStatistics) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



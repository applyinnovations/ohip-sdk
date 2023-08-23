# FetchPlayerStatisticsRS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PlayerStatistics** | Pointer to [**PlayerStatisticsType**](PlayerStatisticsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewFetchPlayerStatisticsRS

`func NewFetchPlayerStatisticsRS() *FetchPlayerStatisticsRS`

NewFetchPlayerStatisticsRS instantiates a new FetchPlayerStatisticsRS object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchPlayerStatisticsRSWithDefaults

`func NewFetchPlayerStatisticsRSWithDefaults() *FetchPlayerStatisticsRS`

NewFetchPlayerStatisticsRSWithDefaults instantiates a new FetchPlayerStatisticsRS object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPlayerStatistics

`func (o *FetchPlayerStatisticsRS) GetPlayerStatistics() PlayerStatisticsType`

GetPlayerStatistics returns the PlayerStatistics field if non-nil, zero value otherwise.

### GetPlayerStatisticsOk

`func (o *FetchPlayerStatisticsRS) GetPlayerStatisticsOk() (*PlayerStatisticsType, bool)`

GetPlayerStatisticsOk returns a tuple with the PlayerStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlayerStatistics

`func (o *FetchPlayerStatisticsRS) SetPlayerStatistics(v PlayerStatisticsType)`

SetPlayerStatistics sets PlayerStatistics field to given value.

### HasPlayerStatistics

`func (o *FetchPlayerStatisticsRS) HasPlayerStatistics() bool`

HasPlayerStatistics returns a boolean if a field has been set.

### GetLinks

`func (o *FetchPlayerStatisticsRS) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchPlayerStatisticsRS) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchPlayerStatisticsRS) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchPlayerStatisticsRS) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



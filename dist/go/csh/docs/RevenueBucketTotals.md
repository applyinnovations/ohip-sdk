# RevenueBucketTotals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueBucketsInfo** | Pointer to [**[]RevenueBucketTotalType**](RevenueBucketTotalType.md) | List of revenue bucket total details | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRevenueBucketTotals

`func NewRevenueBucketTotals() *RevenueBucketTotals`

NewRevenueBucketTotals instantiates a new RevenueBucketTotals object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueBucketTotalsWithDefaults

`func NewRevenueBucketTotalsWithDefaults() *RevenueBucketTotals`

NewRevenueBucketTotalsWithDefaults instantiates a new RevenueBucketTotals object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueBucketsInfo

`func (o *RevenueBucketTotals) GetRevenueBucketsInfo() []RevenueBucketTotalType`

GetRevenueBucketsInfo returns the RevenueBucketsInfo field if non-nil, zero value otherwise.

### GetRevenueBucketsInfoOk

`func (o *RevenueBucketTotals) GetRevenueBucketsInfoOk() (*[]RevenueBucketTotalType, bool)`

GetRevenueBucketsInfoOk returns a tuple with the RevenueBucketsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBucketsInfo

`func (o *RevenueBucketTotals) SetRevenueBucketsInfo(v []RevenueBucketTotalType)`

SetRevenueBucketsInfo sets RevenueBucketsInfo field to given value.

### HasRevenueBucketsInfo

`func (o *RevenueBucketTotals) HasRevenueBucketsInfo() bool`

HasRevenueBucketsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *RevenueBucketTotals) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RevenueBucketTotals) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RevenueBucketTotals) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RevenueBucketTotals) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RevenueBucketTotals) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RevenueBucketTotals) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RevenueBucketTotals) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RevenueBucketTotals) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



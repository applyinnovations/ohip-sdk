# HotelPackageSchedulePriceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UnitPrice** | Pointer to **float32** | The price per unit of the package. | [optional] 
**UnitAllowance** | Pointer to **float32** | The allowance per unit of the package. | [optional] 
**UnitPoints** | Pointer to **float32** | Number of points per unit of the package | [optional] 
**Bucket** | Pointer to [**PackageChildBuckets**](PackageChildBuckets.md) |  | [optional] 
**BucketLabel** | Pointer to **string** | Guest age label configured for the bucket when Guest Age Categories OPERA Control is active. | [optional] 

## Methods

### NewHotelPackageSchedulePriceType

`func NewHotelPackageSchedulePriceType() *HotelPackageSchedulePriceType`

NewHotelPackageSchedulePriceType instantiates a new HotelPackageSchedulePriceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelPackageSchedulePriceTypeWithDefaults

`func NewHotelPackageSchedulePriceTypeWithDefaults() *HotelPackageSchedulePriceType`

NewHotelPackageSchedulePriceTypeWithDefaults instantiates a new HotelPackageSchedulePriceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUnitPrice

`func (o *HotelPackageSchedulePriceType) GetUnitPrice() float32`

GetUnitPrice returns the UnitPrice field if non-nil, zero value otherwise.

### GetUnitPriceOk

`func (o *HotelPackageSchedulePriceType) GetUnitPriceOk() (*float32, bool)`

GetUnitPriceOk returns a tuple with the UnitPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitPrice

`func (o *HotelPackageSchedulePriceType) SetUnitPrice(v float32)`

SetUnitPrice sets UnitPrice field to given value.

### HasUnitPrice

`func (o *HotelPackageSchedulePriceType) HasUnitPrice() bool`

HasUnitPrice returns a boolean if a field has been set.

### GetUnitAllowance

`func (o *HotelPackageSchedulePriceType) GetUnitAllowance() float32`

GetUnitAllowance returns the UnitAllowance field if non-nil, zero value otherwise.

### GetUnitAllowanceOk

`func (o *HotelPackageSchedulePriceType) GetUnitAllowanceOk() (*float32, bool)`

GetUnitAllowanceOk returns a tuple with the UnitAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitAllowance

`func (o *HotelPackageSchedulePriceType) SetUnitAllowance(v float32)`

SetUnitAllowance sets UnitAllowance field to given value.

### HasUnitAllowance

`func (o *HotelPackageSchedulePriceType) HasUnitAllowance() bool`

HasUnitAllowance returns a boolean if a field has been set.

### GetUnitPoints

`func (o *HotelPackageSchedulePriceType) GetUnitPoints() float32`

GetUnitPoints returns the UnitPoints field if non-nil, zero value otherwise.

### GetUnitPointsOk

`func (o *HotelPackageSchedulePriceType) GetUnitPointsOk() (*float32, bool)`

GetUnitPointsOk returns a tuple with the UnitPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitPoints

`func (o *HotelPackageSchedulePriceType) SetUnitPoints(v float32)`

SetUnitPoints sets UnitPoints field to given value.

### HasUnitPoints

`func (o *HotelPackageSchedulePriceType) HasUnitPoints() bool`

HasUnitPoints returns a boolean if a field has been set.

### GetBucket

`func (o *HotelPackageSchedulePriceType) GetBucket() PackageChildBuckets`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *HotelPackageSchedulePriceType) GetBucketOk() (*PackageChildBuckets, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *HotelPackageSchedulePriceType) SetBucket(v PackageChildBuckets)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *HotelPackageSchedulePriceType) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetBucketLabel

`func (o *HotelPackageSchedulePriceType) GetBucketLabel() string`

GetBucketLabel returns the BucketLabel field if non-nil, zero value otherwise.

### GetBucketLabelOk

`func (o *HotelPackageSchedulePriceType) GetBucketLabelOk() (*string, bool)`

GetBucketLabelOk returns a tuple with the BucketLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketLabel

`func (o *HotelPackageSchedulePriceType) SetBucketLabel(v string)`

SetBucketLabel sets BucketLabel field to given value.

### HasBucketLabel

`func (o *HotelPackageSchedulePriceType) HasBucketLabel() bool`

HasBucketLabel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



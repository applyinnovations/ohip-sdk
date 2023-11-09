# RevenueBucketCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BucketType** | Pointer to [**BucketTypeType**](BucketTypeType.md) |  | [optional] 
**BucketValue** | Pointer to **string** | Stores the default value for the arrangement code for revenue buckets in order to group transaction codes. | [optional] 
**Code** | Pointer to **string** | Code is used to identify a trx code arrangement. | [optional] 
**Description** | Pointer to **string** | Description of the trx code arrangement code. | [optional] 
**HotelId** | Pointer to **string** | Identifies the hotel code for which the trx code arrangement is specified. | [optional] 
**PointsEligible** | Pointer to **bool** | Bucket is eligible for membership points | [optional] 
**RevenueBucketType** | Pointer to **string** | This holds Revenue Bucket Type | [optional] 
**TransactionCodes** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 

## Methods

### NewRevenueBucketCodeType

`func NewRevenueBucketCodeType() *RevenueBucketCodeType`

NewRevenueBucketCodeType instantiates a new RevenueBucketCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueBucketCodeTypeWithDefaults

`func NewRevenueBucketCodeTypeWithDefaults() *RevenueBucketCodeType`

NewRevenueBucketCodeTypeWithDefaults instantiates a new RevenueBucketCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBucketType

`func (o *RevenueBucketCodeType) GetBucketType() BucketTypeType`

GetBucketType returns the BucketType field if non-nil, zero value otherwise.

### GetBucketTypeOk

`func (o *RevenueBucketCodeType) GetBucketTypeOk() (*BucketTypeType, bool)`

GetBucketTypeOk returns a tuple with the BucketType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketType

`func (o *RevenueBucketCodeType) SetBucketType(v BucketTypeType)`

SetBucketType sets BucketType field to given value.

### HasBucketType

`func (o *RevenueBucketCodeType) HasBucketType() bool`

HasBucketType returns a boolean if a field has been set.

### GetBucketValue

`func (o *RevenueBucketCodeType) GetBucketValue() string`

GetBucketValue returns the BucketValue field if non-nil, zero value otherwise.

### GetBucketValueOk

`func (o *RevenueBucketCodeType) GetBucketValueOk() (*string, bool)`

GetBucketValueOk returns a tuple with the BucketValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketValue

`func (o *RevenueBucketCodeType) SetBucketValue(v string)`

SetBucketValue sets BucketValue field to given value.

### HasBucketValue

`func (o *RevenueBucketCodeType) HasBucketValue() bool`

HasBucketValue returns a boolean if a field has been set.

### GetCode

`func (o *RevenueBucketCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RevenueBucketCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RevenueBucketCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RevenueBucketCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *RevenueBucketCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RevenueBucketCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RevenueBucketCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RevenueBucketCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *RevenueBucketCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RevenueBucketCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RevenueBucketCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RevenueBucketCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPointsEligible

`func (o *RevenueBucketCodeType) GetPointsEligible() bool`

GetPointsEligible returns the PointsEligible field if non-nil, zero value otherwise.

### GetPointsEligibleOk

`func (o *RevenueBucketCodeType) GetPointsEligibleOk() (*bool, bool)`

GetPointsEligibleOk returns a tuple with the PointsEligible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsEligible

`func (o *RevenueBucketCodeType) SetPointsEligible(v bool)`

SetPointsEligible sets PointsEligible field to given value.

### HasPointsEligible

`func (o *RevenueBucketCodeType) HasPointsEligible() bool`

HasPointsEligible returns a boolean if a field has been set.

### GetRevenueBucketType

`func (o *RevenueBucketCodeType) GetRevenueBucketType() string`

GetRevenueBucketType returns the RevenueBucketType field if non-nil, zero value otherwise.

### GetRevenueBucketTypeOk

`func (o *RevenueBucketCodeType) GetRevenueBucketTypeOk() (*string, bool)`

GetRevenueBucketTypeOk returns a tuple with the RevenueBucketType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBucketType

`func (o *RevenueBucketCodeType) SetRevenueBucketType(v string)`

SetRevenueBucketType sets RevenueBucketType field to given value.

### HasRevenueBucketType

`func (o *RevenueBucketCodeType) HasRevenueBucketType() bool`

HasRevenueBucketType returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *RevenueBucketCodeType) GetTransactionCodes() TrxCodesInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *RevenueBucketCodeType) GetTransactionCodesOk() (*TrxCodesInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *RevenueBucketCodeType) SetTransactionCodes(v TrxCodesInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *RevenueBucketCodeType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



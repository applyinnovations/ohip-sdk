# PostRateCodeCheckType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CanPostProducts** | Pointer to **bool** | Indicates that the Products(Packages) which are included in the Rate Code cannot be posted as part of this transaction. This could be the case where the reservation is an Open Folio or has Post Stay. | [optional] 
**CanReverseProducts** | Pointer to **bool** | Indicates that the Products(Packages) which are included in the Rate Code cannot be reversed as part of this transaction. This could be the case when the reservation has consumed the allowance already and is now trying to reverse the Rate Code by using a negative quantity. | [optional] 
**RateCodeHasProducts** | Pointer to **bool** | Indicates that the Rate Code has Products(Packages) for the user to determine if they should be posted. | [optional] 

## Methods

### NewPostRateCodeCheckType

`func NewPostRateCodeCheckType() *PostRateCodeCheckType`

NewPostRateCodeCheckType instantiates a new PostRateCodeCheckType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRateCodeCheckTypeWithDefaults

`func NewPostRateCodeCheckTypeWithDefaults() *PostRateCodeCheckType`

NewPostRateCodeCheckTypeWithDefaults instantiates a new PostRateCodeCheckType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCanPostProducts

`func (o *PostRateCodeCheckType) GetCanPostProducts() bool`

GetCanPostProducts returns the CanPostProducts field if non-nil, zero value otherwise.

### GetCanPostProductsOk

`func (o *PostRateCodeCheckType) GetCanPostProductsOk() (*bool, bool)`

GetCanPostProductsOk returns a tuple with the CanPostProducts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanPostProducts

`func (o *PostRateCodeCheckType) SetCanPostProducts(v bool)`

SetCanPostProducts sets CanPostProducts field to given value.

### HasCanPostProducts

`func (o *PostRateCodeCheckType) HasCanPostProducts() bool`

HasCanPostProducts returns a boolean if a field has been set.

### GetCanReverseProducts

`func (o *PostRateCodeCheckType) GetCanReverseProducts() bool`

GetCanReverseProducts returns the CanReverseProducts field if non-nil, zero value otherwise.

### GetCanReverseProductsOk

`func (o *PostRateCodeCheckType) GetCanReverseProductsOk() (*bool, bool)`

GetCanReverseProductsOk returns a tuple with the CanReverseProducts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanReverseProducts

`func (o *PostRateCodeCheckType) SetCanReverseProducts(v bool)`

SetCanReverseProducts sets CanReverseProducts field to given value.

### HasCanReverseProducts

`func (o *PostRateCodeCheckType) HasCanReverseProducts() bool`

HasCanReverseProducts returns a boolean if a field has been set.

### GetRateCodeHasProducts

`func (o *PostRateCodeCheckType) GetRateCodeHasProducts() bool`

GetRateCodeHasProducts returns the RateCodeHasProducts field if non-nil, zero value otherwise.

### GetRateCodeHasProductsOk

`func (o *PostRateCodeCheckType) GetRateCodeHasProductsOk() (*bool, bool)`

GetRateCodeHasProductsOk returns a tuple with the RateCodeHasProducts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodeHasProducts

`func (o *PostRateCodeCheckType) SetRateCodeHasProducts(v bool)`

SetRateCodeHasProducts sets RateCodeHasProducts field to given value.

### HasRateCodeHasProducts

`func (o *PostRateCodeCheckType) HasRateCodeHasProducts() bool`

HasRateCodeHasProducts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



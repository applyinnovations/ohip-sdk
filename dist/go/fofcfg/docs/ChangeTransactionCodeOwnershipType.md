# ChangeTransactionCodeOwnershipType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCodes** | Pointer to **[]string** |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code for which to update ownership of the Transaction codes | [optional] 
**OwnershipStatus** | Pointer to [**TrxOwnershipType**](TrxOwnershipType.md) |  | [optional] 

## Methods

### NewChangeTransactionCodeOwnershipType

`func NewChangeTransactionCodeOwnershipType() *ChangeTransactionCodeOwnershipType`

NewChangeTransactionCodeOwnershipType instantiates a new ChangeTransactionCodeOwnershipType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTransactionCodeOwnershipTypeWithDefaults

`func NewChangeTransactionCodeOwnershipTypeWithDefaults() *ChangeTransactionCodeOwnershipType`

NewChangeTransactionCodeOwnershipTypeWithDefaults instantiates a new ChangeTransactionCodeOwnershipType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCodes

`func (o *ChangeTransactionCodeOwnershipType) GetTransactionCodes() []string`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *ChangeTransactionCodeOwnershipType) GetTransactionCodesOk() (*[]string, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *ChangeTransactionCodeOwnershipType) SetTransactionCodes(v []string)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *ChangeTransactionCodeOwnershipType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetHotelId

`func (o *ChangeTransactionCodeOwnershipType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeTransactionCodeOwnershipType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeTransactionCodeOwnershipType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeTransactionCodeOwnershipType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetOwnershipStatus

`func (o *ChangeTransactionCodeOwnershipType) GetOwnershipStatus() TrxOwnershipType`

GetOwnershipStatus returns the OwnershipStatus field if non-nil, zero value otherwise.

### GetOwnershipStatusOk

`func (o *ChangeTransactionCodeOwnershipType) GetOwnershipStatusOk() (*TrxOwnershipType, bool)`

GetOwnershipStatusOk returns a tuple with the OwnershipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnershipStatus

`func (o *ChangeTransactionCodeOwnershipType) SetOwnershipStatus(v TrxOwnershipType)`

SetOwnershipStatus sets OwnershipStatus field to given value.

### HasOwnershipStatus

`func (o *ChangeTransactionCodeOwnershipType) HasOwnershipStatus() bool`

HasOwnershipStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



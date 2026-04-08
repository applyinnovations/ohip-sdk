# HotelConfigDepositPoliciesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepositPolicy** | Pointer to [**[]ConfigDepositPolicyType**](ConfigDepositPolicyType.md) | Collection of Deposit Policy configurations of a hotel. | [optional] 
**HotelId** | Pointer to **string** | Hotel code of the collection of Deposit Policy configurations. | [optional] 

## Methods

### NewHotelConfigDepositPoliciesType

`func NewHotelConfigDepositPoliciesType() *HotelConfigDepositPoliciesType`

NewHotelConfigDepositPoliciesType instantiates a new HotelConfigDepositPoliciesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelConfigDepositPoliciesTypeWithDefaults

`func NewHotelConfigDepositPoliciesTypeWithDefaults() *HotelConfigDepositPoliciesType`

NewHotelConfigDepositPoliciesTypeWithDefaults instantiates a new HotelConfigDepositPoliciesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepositPolicy

`func (o *HotelConfigDepositPoliciesType) GetDepositPolicy() []ConfigDepositPolicyType`

GetDepositPolicy returns the DepositPolicy field if non-nil, zero value otherwise.

### GetDepositPolicyOk

`func (o *HotelConfigDepositPoliciesType) GetDepositPolicyOk() (*[]ConfigDepositPolicyType, bool)`

GetDepositPolicyOk returns a tuple with the DepositPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicy

`func (o *HotelConfigDepositPoliciesType) SetDepositPolicy(v []ConfigDepositPolicyType)`

SetDepositPolicy sets DepositPolicy field to given value.

### HasDepositPolicy

`func (o *HotelConfigDepositPoliciesType) HasDepositPolicy() bool`

HasDepositPolicy returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelConfigDepositPoliciesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelConfigDepositPoliciesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelConfigDepositPoliciesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelConfigDepositPoliciesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



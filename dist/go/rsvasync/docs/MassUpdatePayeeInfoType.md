# MassUpdatePayeeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PayeeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PayeeAddress** | Pointer to [**MassUpdateAddressInfoType**](MassUpdateAddressInfoType.md) |  | [optional] 

## Methods

### NewMassUpdatePayeeInfoType

`func NewMassUpdatePayeeInfoType() *MassUpdatePayeeInfoType`

NewMassUpdatePayeeInfoType instantiates a new MassUpdatePayeeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassUpdatePayeeInfoTypeWithDefaults

`func NewMassUpdatePayeeInfoTypeWithDefaults() *MassUpdatePayeeInfoType`

NewMassUpdatePayeeInfoTypeWithDefaults instantiates a new MassUpdatePayeeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayeeId

`func (o *MassUpdatePayeeInfoType) GetPayeeId() UniqueIDType`

GetPayeeId returns the PayeeId field if non-nil, zero value otherwise.

### GetPayeeIdOk

`func (o *MassUpdatePayeeInfoType) GetPayeeIdOk() (*UniqueIDType, bool)`

GetPayeeIdOk returns a tuple with the PayeeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeId

`func (o *MassUpdatePayeeInfoType) SetPayeeId(v UniqueIDType)`

SetPayeeId sets PayeeId field to given value.

### HasPayeeId

`func (o *MassUpdatePayeeInfoType) HasPayeeId() bool`

HasPayeeId returns a boolean if a field has been set.

### GetPayeeAddress

`func (o *MassUpdatePayeeInfoType) GetPayeeAddress() MassUpdateAddressInfoType`

GetPayeeAddress returns the PayeeAddress field if non-nil, zero value otherwise.

### GetPayeeAddressOk

`func (o *MassUpdatePayeeInfoType) GetPayeeAddressOk() (*MassUpdateAddressInfoType, bool)`

GetPayeeAddressOk returns a tuple with the PayeeAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeAddress

`func (o *MassUpdatePayeeInfoType) SetPayeeAddress(v MassUpdateAddressInfoType)`

SetPayeeAddress sets PayeeAddress field to given value.

### HasPayeeAddress

`func (o *MassUpdatePayeeInfoType) HasPayeeAddress() bool`

HasPayeeAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TelephoneInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Telephone** | Pointer to [**TelephoneType**](TelephoneType.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewTelephoneInfoType

`func NewTelephoneInfoType() *TelephoneInfoType`

NewTelephoneInfoType instantiates a new TelephoneInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTelephoneInfoTypeWithDefaults

`func NewTelephoneInfoTypeWithDefaults() *TelephoneInfoType`

NewTelephoneInfoTypeWithDefaults instantiates a new TelephoneInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTelephone

`func (o *TelephoneInfoType) GetTelephone() TelephoneType`

GetTelephone returns the Telephone field if non-nil, zero value otherwise.

### GetTelephoneOk

`func (o *TelephoneInfoType) GetTelephoneOk() (*TelephoneType, bool)`

GetTelephoneOk returns a tuple with the Telephone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephone

`func (o *TelephoneInfoType) SetTelephone(v TelephoneType)`

SetTelephone sets Telephone field to given value.

### HasTelephone

`func (o *TelephoneInfoType) HasTelephone() bool`

HasTelephone returns a boolean if a field has been set.

### GetId

`func (o *TelephoneInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TelephoneInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TelephoneInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TelephoneInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *TelephoneInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TelephoneInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TelephoneInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TelephoneInfoType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# UniqueIDType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewUniqueIDType

`func NewUniqueIDType() *UniqueIDType`

NewUniqueIDType instantiates a new UniqueIDType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUniqueIDTypeWithDefaults

`func NewUniqueIDTypeWithDefaults() *UniqueIDType`

NewUniqueIDTypeWithDefaults instantiates a new UniqueIDType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UniqueIDType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UniqueIDType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UniqueIDType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UniqueIDType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *UniqueIDType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UniqueIDType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UniqueIDType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UniqueIDType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



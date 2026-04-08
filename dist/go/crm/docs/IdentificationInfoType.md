# IdentificationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identification** | Pointer to [**IdentificationType**](IdentificationType.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewIdentificationInfoType

`func NewIdentificationInfoType() *IdentificationInfoType`

NewIdentificationInfoType instantiates a new IdentificationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentificationInfoTypeWithDefaults

`func NewIdentificationInfoTypeWithDefaults() *IdentificationInfoType`

NewIdentificationInfoTypeWithDefaults instantiates a new IdentificationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentification

`func (o *IdentificationInfoType) GetIdentification() IdentificationType`

GetIdentification returns the Identification field if non-nil, zero value otherwise.

### GetIdentificationOk

`func (o *IdentificationInfoType) GetIdentificationOk() (*IdentificationType, bool)`

GetIdentificationOk returns a tuple with the Identification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentification

`func (o *IdentificationInfoType) SetIdentification(v IdentificationType)`

SetIdentification sets Identification field to given value.

### HasIdentification

`func (o *IdentificationInfoType) HasIdentification() bool`

HasIdentification returns a boolean if a field has been set.

### GetId

`func (o *IdentificationInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentificationInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentificationInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentificationInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *IdentificationInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentificationInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentificationInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentificationInfoType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



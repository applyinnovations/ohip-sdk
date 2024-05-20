# DistinctIDType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. Eg: ConfirmationLegNumber, ExternalLegNumber | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. Eg: Reservation, Confirmation, Cancellation, ExternalReference etc | [optional] 

## Methods

### NewDistinctIDType

`func NewDistinctIDType() *DistinctIDType`

NewDistinctIDType instantiates a new DistinctIDType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistinctIDTypeWithDefaults

`func NewDistinctIDTypeWithDefaults() *DistinctIDType`

NewDistinctIDTypeWithDefaults instantiates a new DistinctIDType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DistinctIDType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DistinctIDType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DistinctIDType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DistinctIDType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *DistinctIDType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *DistinctIDType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *DistinctIDType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *DistinctIDType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetType

`func (o *DistinctIDType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DistinctIDType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DistinctIDType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DistinctIDType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



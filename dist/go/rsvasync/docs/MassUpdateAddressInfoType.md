# MassUpdateAddressInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 

## Methods

### NewMassUpdateAddressInfoType

`func NewMassUpdateAddressInfoType() *MassUpdateAddressInfoType`

NewMassUpdateAddressInfoType instantiates a new MassUpdateAddressInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassUpdateAddressInfoTypeWithDefaults

`func NewMassUpdateAddressInfoTypeWithDefaults() *MassUpdateAddressInfoType`

NewMassUpdateAddressInfoTypeWithDefaults instantiates a new MassUpdateAddressInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MassUpdateAddressInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MassUpdateAddressInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MassUpdateAddressInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MassUpdateAddressInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *MassUpdateAddressInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MassUpdateAddressInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MassUpdateAddressInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MassUpdateAddressInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetIdContext

`func (o *MassUpdateAddressInfoType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *MassUpdateAddressInfoType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *MassUpdateAddressInfoType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *MassUpdateAddressInfoType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



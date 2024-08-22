# NameValueOriginType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Destination** | Pointer to **string** | Contains destination column for Origin. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**OriginName** | Pointer to [**NameValueModuleType**](NameValueModuleType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID elementSpace. | [optional] 

## Methods

### NewNameValueOriginType

`func NewNameValueOriginType() *NameValueOriginType`

NewNameValueOriginType instantiates a new NameValueOriginType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNameValueOriginTypeWithDefaults

`func NewNameValueOriginTypeWithDefaults() *NameValueOriginType`

NewNameValueOriginTypeWithDefaults instantiates a new NameValueOriginType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDestination

`func (o *NameValueOriginType) GetDestination() string`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *NameValueOriginType) GetDestinationOk() (*string, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *NameValueOriginType) SetDestination(v string)`

SetDestination sets Destination field to given value.

### HasDestination

`func (o *NameValueOriginType) HasDestination() bool`

HasDestination returns a boolean if a field has been set.

### GetId

`func (o *NameValueOriginType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NameValueOriginType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NameValueOriginType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NameValueOriginType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetOriginName

`func (o *NameValueOriginType) GetOriginName() NameValueModuleType`

GetOriginName returns the OriginName field if non-nil, zero value otherwise.

### GetOriginNameOk

`func (o *NameValueOriginType) GetOriginNameOk() (*NameValueModuleType, bool)`

GetOriginNameOk returns a tuple with the OriginName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginName

`func (o *NameValueOriginType) SetOriginName(v NameValueModuleType)`

SetOriginName sets OriginName field to given value.

### HasOriginName

`func (o *NameValueOriginType) HasOriginName() bool`

HasOriginName returns a boolean if a field has been set.

### GetType

`func (o *NameValueOriginType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *NameValueOriginType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *NameValueOriginType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *NameValueOriginType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



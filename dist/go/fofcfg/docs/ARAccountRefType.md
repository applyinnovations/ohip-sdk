# ARAccountRefType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountNo** | Pointer to **string** | The Account Number for the Account. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**Name** | Pointer to **string** | AR account name. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 

## Methods

### NewARAccountRefType

`func NewARAccountRefType() *ARAccountRefType`

NewARAccountRefType instantiates a new ARAccountRefType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountRefTypeWithDefaults

`func NewARAccountRefTypeWithDefaults() *ARAccountRefType`

NewARAccountRefTypeWithDefaults instantiates a new ARAccountRefType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountNo

`func (o *ARAccountRefType) GetAccountNo() string`

GetAccountNo returns the AccountNo field if non-nil, zero value otherwise.

### GetAccountNoOk

`func (o *ARAccountRefType) GetAccountNoOk() (*string, bool)`

GetAccountNoOk returns a tuple with the AccountNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNo

`func (o *ARAccountRefType) SetAccountNo(v string)`

SetAccountNo sets AccountNo field to given value.

### HasAccountNo

`func (o *ARAccountRefType) HasAccountNo() bool`

HasAccountNo returns a boolean if a field has been set.

### GetId

`func (o *ARAccountRefType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ARAccountRefType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ARAccountRefType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ARAccountRefType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *ARAccountRefType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *ARAccountRefType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *ARAccountRefType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *ARAccountRefType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetIdExtension

`func (o *ARAccountRefType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *ARAccountRefType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *ARAccountRefType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *ARAccountRefType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetInstance

`func (o *ARAccountRefType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ARAccountRefType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ARAccountRefType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ARAccountRefType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetName

`func (o *ARAccountRefType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ARAccountRefType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ARAccountRefType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ARAccountRefType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ARAccountRefType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ARAccountRefType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ARAccountRefType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ARAccountRefType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *ARAccountRefType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ARAccountRefType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ARAccountRefType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ARAccountRefType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



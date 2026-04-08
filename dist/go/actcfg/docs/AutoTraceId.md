# AutoTraceId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 

## Methods

### NewAutoTraceId

`func NewAutoTraceId() *AutoTraceId`

NewAutoTraceId instantiates a new AutoTraceId object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoTraceIdWithDefaults

`func NewAutoTraceIdWithDefaults() *AutoTraceId`

NewAutoTraceIdWithDefaults instantiates a new AutoTraceId object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *AutoTraceId) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *AutoTraceId) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *AutoTraceId) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *AutoTraceId) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *AutoTraceId) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AutoTraceId) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AutoTraceId) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AutoTraceId) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *AutoTraceId) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *AutoTraceId) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *AutoTraceId) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *AutoTraceId) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *AutoTraceId) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *AutoTraceId) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *AutoTraceId) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *AutoTraceId) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *AutoTraceId) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AutoTraceId) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AutoTraceId) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AutoTraceId) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *AutoTraceId) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *AutoTraceId) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *AutoTraceId) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *AutoTraceId) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



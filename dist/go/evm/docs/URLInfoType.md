# URLInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID elementSpace. | [optional] 
**Url** | Pointer to [**URLType**](URLType.md) |  | [optional] 

## Methods

### NewURLInfoType

`func NewURLInfoType() *URLInfoType`

NewURLInfoType instantiates a new URLInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewURLInfoTypeWithDefaults

`func NewURLInfoTypeWithDefaults() *URLInfoType`

NewURLInfoTypeWithDefaults instantiates a new URLInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *URLInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *URLInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *URLInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *URLInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *URLInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *URLInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *URLInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *URLInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *URLInfoType) GetUrl() URLType`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *URLInfoType) GetUrlOk() (*URLType, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *URLInfoType) SetUrl(v URLType)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *URLInfoType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



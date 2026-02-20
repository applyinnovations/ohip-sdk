# URLInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | Pointer to [**URLType**](URLType.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

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

### GetIdContext

`func (o *URLInfoType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *URLInfoType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *URLInfoType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *URLInfoType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetWarnings

`func (o *URLInfoType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *URLInfoType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *URLInfoType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *URLInfoType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



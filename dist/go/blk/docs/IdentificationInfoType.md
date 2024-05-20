# IdentificationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Identification** | Pointer to [**IdentificationType**](IdentificationType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

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

### GetIdContext

`func (o *IdentificationInfoType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *IdentificationInfoType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *IdentificationInfoType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *IdentificationInfoType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

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

### GetWarnings

`func (o *IdentificationInfoType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *IdentificationInfoType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *IdentificationInfoType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *IdentificationInfoType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



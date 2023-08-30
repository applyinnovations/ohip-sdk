# StagedProfileNumericUDFType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of user defined field. | [optional] 
**Value** | Pointer to **float32** | Value of user defined field. | [optional] 
**Altname** | Pointer to **string** | Label of user defined field used by vendors or customers. | [optional] 
**ErrorDescription** | Pointer to **string** | The error in a user defined field in a staged profile with an invalid status | [optional] 
**TableName** | Pointer to **string** | PMS table name. | [optional] 
**Valid** | Pointer to **bool** | Indicates whether the UDF information is valid. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfileNumericUDFType

`func NewStagedProfileNumericUDFType() *StagedProfileNumericUDFType`

NewStagedProfileNumericUDFType instantiates a new StagedProfileNumericUDFType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileNumericUDFTypeWithDefaults

`func NewStagedProfileNumericUDFTypeWithDefaults() *StagedProfileNumericUDFType`

NewStagedProfileNumericUDFTypeWithDefaults instantiates a new StagedProfileNumericUDFType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *StagedProfileNumericUDFType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *StagedProfileNumericUDFType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *StagedProfileNumericUDFType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *StagedProfileNumericUDFType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *StagedProfileNumericUDFType) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *StagedProfileNumericUDFType) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *StagedProfileNumericUDFType) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *StagedProfileNumericUDFType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetAltname

`func (o *StagedProfileNumericUDFType) GetAltname() string`

GetAltname returns the Altname field if non-nil, zero value otherwise.

### GetAltnameOk

`func (o *StagedProfileNumericUDFType) GetAltnameOk() (*string, bool)`

GetAltnameOk returns a tuple with the Altname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAltname

`func (o *StagedProfileNumericUDFType) SetAltname(v string)`

SetAltname sets Altname field to given value.

### HasAltname

`func (o *StagedProfileNumericUDFType) HasAltname() bool`

HasAltname returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileNumericUDFType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileNumericUDFType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileNumericUDFType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileNumericUDFType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetTableName

`func (o *StagedProfileNumericUDFType) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *StagedProfileNumericUDFType) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *StagedProfileNumericUDFType) SetTableName(v string)`

SetTableName sets TableName field to given value.

### HasTableName

`func (o *StagedProfileNumericUDFType) HasTableName() bool`

HasTableName returns a boolean if a field has been set.

### GetValid

`func (o *StagedProfileNumericUDFType) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *StagedProfileNumericUDFType) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *StagedProfileNumericUDFType) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *StagedProfileNumericUDFType) HasValid() bool`

HasValid returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileNumericUDFType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileNumericUDFType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileNumericUDFType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileNumericUDFType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileNumericUDFType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileNumericUDFType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileNumericUDFType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileNumericUDFType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



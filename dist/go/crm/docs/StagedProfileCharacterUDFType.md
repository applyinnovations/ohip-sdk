# StagedProfileCharacterUDFType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternateName** | Pointer to **string** | Label of user defined field used by vendors or customers. | [optional] 
**ErrorDescription** | Pointer to **string** | The error in a user defined field in a staged profile with an invalid status | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Name** | Pointer to **string** | Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. | [optional] 
**TableName** | Pointer to **string** | PMS table name. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Valid** | Pointer to **bool** | Indicates whether the UDF information is valid. | [optional] 
**Value** | Pointer to **string** | Value of user defined field. | [optional] 

## Methods

### NewStagedProfileCharacterUDFType

`func NewStagedProfileCharacterUDFType() *StagedProfileCharacterUDFType`

NewStagedProfileCharacterUDFType instantiates a new StagedProfileCharacterUDFType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileCharacterUDFTypeWithDefaults

`func NewStagedProfileCharacterUDFTypeWithDefaults() *StagedProfileCharacterUDFType`

NewStagedProfileCharacterUDFTypeWithDefaults instantiates a new StagedProfileCharacterUDFType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternateName

`func (o *StagedProfileCharacterUDFType) GetAlternateName() string`

GetAlternateName returns the AlternateName field if non-nil, zero value otherwise.

### GetAlternateNameOk

`func (o *StagedProfileCharacterUDFType) GetAlternateNameOk() (*string, bool)`

GetAlternateNameOk returns a tuple with the AlternateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateName

`func (o *StagedProfileCharacterUDFType) SetAlternateName(v string)`

SetAlternateName sets AlternateName field to given value.

### HasAlternateName

`func (o *StagedProfileCharacterUDFType) HasAlternateName() bool`

HasAlternateName returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileCharacterUDFType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileCharacterUDFType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileCharacterUDFType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileCharacterUDFType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileCharacterUDFType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileCharacterUDFType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileCharacterUDFType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileCharacterUDFType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *StagedProfileCharacterUDFType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *StagedProfileCharacterUDFType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *StagedProfileCharacterUDFType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *StagedProfileCharacterUDFType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTableName

`func (o *StagedProfileCharacterUDFType) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *StagedProfileCharacterUDFType) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *StagedProfileCharacterUDFType) SetTableName(v string)`

SetTableName sets TableName field to given value.

### HasTableName

`func (o *StagedProfileCharacterUDFType) HasTableName() bool`

HasTableName returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileCharacterUDFType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileCharacterUDFType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileCharacterUDFType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileCharacterUDFType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetValid

`func (o *StagedProfileCharacterUDFType) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *StagedProfileCharacterUDFType) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *StagedProfileCharacterUDFType) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *StagedProfileCharacterUDFType) HasValid() bool`

HasValid returns a boolean if a field has been set.

### GetValue

`func (o *StagedProfileCharacterUDFType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *StagedProfileCharacterUDFType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *StagedProfileCharacterUDFType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *StagedProfileCharacterUDFType) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



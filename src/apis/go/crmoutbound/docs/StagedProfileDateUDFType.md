# StagedProfileDateUDFType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. | [optional] 
**Value** | Pointer to **string** | Value of user defined field. | [optional] 
**Altname** | Pointer to **string** | Label of user defined field used by vendors or customers. | [optional] 
**ErrorDescription** | Pointer to **string** | The error in a user defined field in a staged profile with an invalid status | [optional] 
**TableName** | Pointer to **string** | PMS table name. | [optional] 
**Valid** | Pointer to **bool** | Indicates whether the UDF information is valid. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfileDateUDFType

`func NewStagedProfileDateUDFType() *StagedProfileDateUDFType`

NewStagedProfileDateUDFType instantiates a new StagedProfileDateUDFType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileDateUDFTypeWithDefaults

`func NewStagedProfileDateUDFTypeWithDefaults() *StagedProfileDateUDFType`

NewStagedProfileDateUDFTypeWithDefaults instantiates a new StagedProfileDateUDFType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *StagedProfileDateUDFType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *StagedProfileDateUDFType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *StagedProfileDateUDFType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *StagedProfileDateUDFType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *StagedProfileDateUDFType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *StagedProfileDateUDFType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *StagedProfileDateUDFType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *StagedProfileDateUDFType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetAltname

`func (o *StagedProfileDateUDFType) GetAltname() string`

GetAltname returns the Altname field if non-nil, zero value otherwise.

### GetAltnameOk

`func (o *StagedProfileDateUDFType) GetAltnameOk() (*string, bool)`

GetAltnameOk returns a tuple with the Altname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAltname

`func (o *StagedProfileDateUDFType) SetAltname(v string)`

SetAltname sets Altname field to given value.

### HasAltname

`func (o *StagedProfileDateUDFType) HasAltname() bool`

HasAltname returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileDateUDFType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileDateUDFType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileDateUDFType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileDateUDFType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetTableName

`func (o *StagedProfileDateUDFType) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *StagedProfileDateUDFType) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *StagedProfileDateUDFType) SetTableName(v string)`

SetTableName sets TableName field to given value.

### HasTableName

`func (o *StagedProfileDateUDFType) HasTableName() bool`

HasTableName returns a boolean if a field has been set.

### GetValid

`func (o *StagedProfileDateUDFType) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *StagedProfileDateUDFType) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *StagedProfileDateUDFType) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *StagedProfileDateUDFType) HasValid() bool`

HasValid returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileDateUDFType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileDateUDFType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileDateUDFType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileDateUDFType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileDateUDFType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileDateUDFType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileDateUDFType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileDateUDFType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



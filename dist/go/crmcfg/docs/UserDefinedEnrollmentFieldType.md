# UserDefinedEnrollmentFieldType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FieldName** | Pointer to [**UserDefinedEnrollmentFieldNameType**](UserDefinedEnrollmentFieldNameType.md) |  | [optional] 
**FieldType** | Pointer to **string** | Type of the Field/Attribute such as phone, fax, email etc. | [optional] 
**RequiredField** | Pointer to **bool** | Indicates if the Field/Attribute is required for Membership Type. | [optional] 
**Active** | Pointer to **bool** | Indicates if the Field/Attribute is active for Membership Type. | [optional] 

## Methods

### NewUserDefinedEnrollmentFieldType

`func NewUserDefinedEnrollmentFieldType() *UserDefinedEnrollmentFieldType`

NewUserDefinedEnrollmentFieldType instantiates a new UserDefinedEnrollmentFieldType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserDefinedEnrollmentFieldTypeWithDefaults

`func NewUserDefinedEnrollmentFieldTypeWithDefaults() *UserDefinedEnrollmentFieldType`

NewUserDefinedEnrollmentFieldTypeWithDefaults instantiates a new UserDefinedEnrollmentFieldType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFieldName

`func (o *UserDefinedEnrollmentFieldType) GetFieldName() UserDefinedEnrollmentFieldNameType`

GetFieldName returns the FieldName field if non-nil, zero value otherwise.

### GetFieldNameOk

`func (o *UserDefinedEnrollmentFieldType) GetFieldNameOk() (*UserDefinedEnrollmentFieldNameType, bool)`

GetFieldNameOk returns a tuple with the FieldName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldName

`func (o *UserDefinedEnrollmentFieldType) SetFieldName(v UserDefinedEnrollmentFieldNameType)`

SetFieldName sets FieldName field to given value.

### HasFieldName

`func (o *UserDefinedEnrollmentFieldType) HasFieldName() bool`

HasFieldName returns a boolean if a field has been set.

### GetFieldType

`func (o *UserDefinedEnrollmentFieldType) GetFieldType() string`

GetFieldType returns the FieldType field if non-nil, zero value otherwise.

### GetFieldTypeOk

`func (o *UserDefinedEnrollmentFieldType) GetFieldTypeOk() (*string, bool)`

GetFieldTypeOk returns a tuple with the FieldType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldType

`func (o *UserDefinedEnrollmentFieldType) SetFieldType(v string)`

SetFieldType sets FieldType field to given value.

### HasFieldType

`func (o *UserDefinedEnrollmentFieldType) HasFieldType() bool`

HasFieldType returns a boolean if a field has been set.

### GetRequiredField

`func (o *UserDefinedEnrollmentFieldType) GetRequiredField() bool`

GetRequiredField returns the RequiredField field if non-nil, zero value otherwise.

### GetRequiredFieldOk

`func (o *UserDefinedEnrollmentFieldType) GetRequiredFieldOk() (*bool, bool)`

GetRequiredFieldOk returns a tuple with the RequiredField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredField

`func (o *UserDefinedEnrollmentFieldType) SetRequiredField(v bool)`

SetRequiredField sets RequiredField field to given value.

### HasRequiredField

`func (o *UserDefinedEnrollmentFieldType) HasRequiredField() bool`

HasRequiredField returns a boolean if a field has been set.

### GetActive

`func (o *UserDefinedEnrollmentFieldType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *UserDefinedEnrollmentFieldType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *UserDefinedEnrollmentFieldType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *UserDefinedEnrollmentFieldType) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



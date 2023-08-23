# ConversionCodeMappingStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OperaDefaultExists** | Pointer to **bool** | A flag that indicates if another Opera Value is marked as External-&gt;OPERA default for the same External Value mapping. | [optional] 
**ExternalDefaultExists** | Pointer to **bool** | A flag that indicates if another External Value is marked as OPERA-&gt;External default for the same Opera Value mapping. | [optional] 

## Methods

### NewConversionCodeMappingStatusType

`func NewConversionCodeMappingStatusType() *ConversionCodeMappingStatusType`

NewConversionCodeMappingStatusType instantiates a new ConversionCodeMappingStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConversionCodeMappingStatusTypeWithDefaults

`func NewConversionCodeMappingStatusTypeWithDefaults() *ConversionCodeMappingStatusType`

NewConversionCodeMappingStatusTypeWithDefaults instantiates a new ConversionCodeMappingStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperaDefaultExists

`func (o *ConversionCodeMappingStatusType) GetOperaDefaultExists() bool`

GetOperaDefaultExists returns the OperaDefaultExists field if non-nil, zero value otherwise.

### GetOperaDefaultExistsOk

`func (o *ConversionCodeMappingStatusType) GetOperaDefaultExistsOk() (*bool, bool)`

GetOperaDefaultExistsOk returns a tuple with the OperaDefaultExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaDefaultExists

`func (o *ConversionCodeMappingStatusType) SetOperaDefaultExists(v bool)`

SetOperaDefaultExists sets OperaDefaultExists field to given value.

### HasOperaDefaultExists

`func (o *ConversionCodeMappingStatusType) HasOperaDefaultExists() bool`

HasOperaDefaultExists returns a boolean if a field has been set.

### GetExternalDefaultExists

`func (o *ConversionCodeMappingStatusType) GetExternalDefaultExists() bool`

GetExternalDefaultExists returns the ExternalDefaultExists field if non-nil, zero value otherwise.

### GetExternalDefaultExistsOk

`func (o *ConversionCodeMappingStatusType) GetExternalDefaultExistsOk() (*bool, bool)`

GetExternalDefaultExistsOk returns a tuple with the ExternalDefaultExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalDefaultExists

`func (o *ConversionCodeMappingStatusType) SetExternalDefaultExists(v bool)`

SetExternalDefaultExists sets ExternalDefaultExists field to given value.

### HasExternalDefaultExists

`func (o *ConversionCodeMappingStatusType) HasExternalDefaultExists() bool`

HasExternalDefaultExists returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



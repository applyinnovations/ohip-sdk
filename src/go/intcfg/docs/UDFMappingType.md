# UDFMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** | A flag to indicate whether the UDF mapping is active in the Interface system or not. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the Type for Reservation and Profile Type. | [optional] 
**UDFLabel** | Pointer to **string** | Label the user-defined function (UDF) field shared with external system which will be send in the request message for mapping of actual UDF Name. | [optional] 
**UDFName** | Pointer to **string** | Name of the user-defined function (UDF) field. | [optional] 
**UpdateAllowed** | Pointer to **bool** | A flag to indicate whether the update is allowed in the Interface system or not. | [optional] 

## Methods

### NewUDFMappingType

`func NewUDFMappingType() *UDFMappingType`

NewUDFMappingType instantiates a new UDFMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUDFMappingTypeWithDefaults

`func NewUDFMappingTypeWithDefaults() *UDFMappingType`

NewUDFMappingTypeWithDefaults instantiates a new UDFMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *UDFMappingType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *UDFMappingType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *UDFMappingType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *UDFMappingType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetType

`func (o *UDFMappingType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UDFMappingType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UDFMappingType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UDFMappingType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUDFLabel

`func (o *UDFMappingType) GetUDFLabel() string`

GetUDFLabel returns the UDFLabel field if non-nil, zero value otherwise.

### GetUDFLabelOk

`func (o *UDFMappingType) GetUDFLabelOk() (*string, bool)`

GetUDFLabelOk returns a tuple with the UDFLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFLabel

`func (o *UDFMappingType) SetUDFLabel(v string)`

SetUDFLabel sets UDFLabel field to given value.

### HasUDFLabel

`func (o *UDFMappingType) HasUDFLabel() bool`

HasUDFLabel returns a boolean if a field has been set.

### GetUDFName

`func (o *UDFMappingType) GetUDFName() string`

GetUDFName returns the UDFName field if non-nil, zero value otherwise.

### GetUDFNameOk

`func (o *UDFMappingType) GetUDFNameOk() (*string, bool)`

GetUDFNameOk returns a tuple with the UDFName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFName

`func (o *UDFMappingType) SetUDFName(v string)`

SetUDFName sets UDFName field to given value.

### HasUDFName

`func (o *UDFMappingType) HasUDFName() bool`

HasUDFName returns a boolean if a field has been set.

### GetUpdateAllowed

`func (o *UDFMappingType) GetUpdateAllowed() bool`

GetUpdateAllowed returns the UpdateAllowed field if non-nil, zero value otherwise.

### GetUpdateAllowedOk

`func (o *UDFMappingType) GetUpdateAllowedOk() (*bool, bool)`

GetUpdateAllowedOk returns a tuple with the UpdateAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateAllowed

`func (o *UDFMappingType) SetUpdateAllowed(v bool)`

SetUpdateAllowed sets UpdateAllowed field to given value.

### HasUpdateAllowed

`func (o *UDFMappingType) HasUpdateAllowed() bool`

HasUpdateAllowed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



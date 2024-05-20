# DeviceMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CodeType** | Pointer to **string** | Internal code type of the mapping entry. | [optional] 
**ExternalCode** | Pointer to **string** | Code used/provided by the external device or application. | [optional] 
**DisplayName** | Pointer to **string** | Display name of the code mapping. | [optional] 
**OperaCode** | Pointer to **string** | Corresponding code value in OPERA. | [optional] 

## Methods

### NewDeviceMappingType

`func NewDeviceMappingType() *DeviceMappingType`

NewDeviceMappingType instantiates a new DeviceMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceMappingTypeWithDefaults

`func NewDeviceMappingTypeWithDefaults() *DeviceMappingType`

NewDeviceMappingTypeWithDefaults instantiates a new DeviceMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCodeType

`func (o *DeviceMappingType) GetCodeType() string`

GetCodeType returns the CodeType field if non-nil, zero value otherwise.

### GetCodeTypeOk

`func (o *DeviceMappingType) GetCodeTypeOk() (*string, bool)`

GetCodeTypeOk returns a tuple with the CodeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeType

`func (o *DeviceMappingType) SetCodeType(v string)`

SetCodeType sets CodeType field to given value.

### HasCodeType

`func (o *DeviceMappingType) HasCodeType() bool`

HasCodeType returns a boolean if a field has been set.

### GetExternalCode

`func (o *DeviceMappingType) GetExternalCode() string`

GetExternalCode returns the ExternalCode field if non-nil, zero value otherwise.

### GetExternalCodeOk

`func (o *DeviceMappingType) GetExternalCodeOk() (*string, bool)`

GetExternalCodeOk returns a tuple with the ExternalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalCode

`func (o *DeviceMappingType) SetExternalCode(v string)`

SetExternalCode sets ExternalCode field to given value.

### HasExternalCode

`func (o *DeviceMappingType) HasExternalCode() bool`

HasExternalCode returns a boolean if a field has been set.

### GetDisplayName

`func (o *DeviceMappingType) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *DeviceMappingType) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *DeviceMappingType) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *DeviceMappingType) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetOperaCode

`func (o *DeviceMappingType) GetOperaCode() string`

GetOperaCode returns the OperaCode field if non-nil, zero value otherwise.

### GetOperaCodeOk

`func (o *DeviceMappingType) GetOperaCodeOk() (*string, bool)`

GetOperaCodeOk returns a tuple with the OperaCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaCode

`func (o *DeviceMappingType) SetOperaCode(v string)`

SetOperaCode sets OperaCode field to given value.

### HasOperaCode

`func (o *DeviceMappingType) HasOperaCode() bool`

HasOperaCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



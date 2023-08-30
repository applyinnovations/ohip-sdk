# ConversionCodeMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the Property. | [optional] 
**InterfaceId** | Pointer to **string** | Identifier of the Interface. | [optional] 
**ConversionCode** | Pointer to **string** | Type of Conversion Code or user-defined function (UDF) module name configured in the system. | [optional] 
**UDFCode** | Pointer to **bool** | A flag that is true if the conversion code is an user-defined function (UDF) module code. | [optional] 
**Id** | Pointer to **float32** | Conversion Code Detail Sequence Number, that uniquely identifies a mapping. | [optional] 
**OperaValue** | Pointer to **string** | OPERA Code value or user-defined function (UDF) field name of the mapping. | [optional] 
**ExternalValue** | Pointer to **string** | A value in the External System that should be mapped to the corresponding OPERA Value or user-defined function (UDF) field. | [optional] 
**OperaColumn** | Pointer to **string** | Name of the OPERA column that is used in the user-defined function (UDF) mapping. | [optional] 
**ExternalFieldName** | Pointer to **string** | Field name in the external system that is used in the user-defined function (UDF) mapping. | [optional] 
**ProfileType** | Pointer to **string** | Profile type of the user-defined function (UDF) definition. | [optional] 
**OperaToExternalDefault** | Pointer to **bool** | When this is true, the External Value of current record is considered to be the default mapping value, where there are more than one mapping for OPERA Value. | [optional] 
**ExternalToOperaDefault** | Pointer to **bool** | When this is true, the OPERA Value of current record is considered to be the default mapping value, where there are more than one mapping for the External System Value. | [optional] 
**OverrideExternalDefault** | Pointer to **bool** | A flag to indicate whether the current External Value should be considered as default, when there is already a default External Value mapped for the same OPERA Value. | [optional] 
**OverrideOperaDefault** | Pointer to **bool** | A flag to indicate whether the current OPERA Value should be considered as default, when there is already a default OPERA Value mapped for the same External Value. | [optional] 
**Active** | Pointer to **bool** | A flag to indicate whether the conversion code mapping is active in the system or not. | [optional] 
**IFCCreated** | Pointer to **bool** | A flag to indicate whether this conversion was manually entered or IFC created. | [optional] 
**MasterValue** | Pointer to **string** | Master Value for the Conversion Code Mapping (if any), to which the OPERA mapping value corresponds to. For user-defined function (UDF) mapping, this field represents the profile type of a profile UDF definition. | [optional] 

## Methods

### NewConversionCodeMappingType

`func NewConversionCodeMappingType() *ConversionCodeMappingType`

NewConversionCodeMappingType instantiates a new ConversionCodeMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConversionCodeMappingTypeWithDefaults

`func NewConversionCodeMappingTypeWithDefaults() *ConversionCodeMappingType`

NewConversionCodeMappingTypeWithDefaults instantiates a new ConversionCodeMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ConversionCodeMappingType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConversionCodeMappingType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConversionCodeMappingType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConversionCodeMappingType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInterfaceId

`func (o *ConversionCodeMappingType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *ConversionCodeMappingType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *ConversionCodeMappingType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *ConversionCodeMappingType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetConversionCode

`func (o *ConversionCodeMappingType) GetConversionCode() string`

GetConversionCode returns the ConversionCode field if non-nil, zero value otherwise.

### GetConversionCodeOk

`func (o *ConversionCodeMappingType) GetConversionCodeOk() (*string, bool)`

GetConversionCodeOk returns a tuple with the ConversionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCode

`func (o *ConversionCodeMappingType) SetConversionCode(v string)`

SetConversionCode sets ConversionCode field to given value.

### HasConversionCode

`func (o *ConversionCodeMappingType) HasConversionCode() bool`

HasConversionCode returns a boolean if a field has been set.

### GetUDFCode

`func (o *ConversionCodeMappingType) GetUDFCode() bool`

GetUDFCode returns the UDFCode field if non-nil, zero value otherwise.

### GetUDFCodeOk

`func (o *ConversionCodeMappingType) GetUDFCodeOk() (*bool, bool)`

GetUDFCodeOk returns a tuple with the UDFCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFCode

`func (o *ConversionCodeMappingType) SetUDFCode(v bool)`

SetUDFCode sets UDFCode field to given value.

### HasUDFCode

`func (o *ConversionCodeMappingType) HasUDFCode() bool`

HasUDFCode returns a boolean if a field has been set.

### GetId

`func (o *ConversionCodeMappingType) GetId() float32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConversionCodeMappingType) GetIdOk() (*float32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConversionCodeMappingType) SetId(v float32)`

SetId sets Id field to given value.

### HasId

`func (o *ConversionCodeMappingType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetOperaValue

`func (o *ConversionCodeMappingType) GetOperaValue() string`

GetOperaValue returns the OperaValue field if non-nil, zero value otherwise.

### GetOperaValueOk

`func (o *ConversionCodeMappingType) GetOperaValueOk() (*string, bool)`

GetOperaValueOk returns a tuple with the OperaValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaValue

`func (o *ConversionCodeMappingType) SetOperaValue(v string)`

SetOperaValue sets OperaValue field to given value.

### HasOperaValue

`func (o *ConversionCodeMappingType) HasOperaValue() bool`

HasOperaValue returns a boolean if a field has been set.

### GetExternalValue

`func (o *ConversionCodeMappingType) GetExternalValue() string`

GetExternalValue returns the ExternalValue field if non-nil, zero value otherwise.

### GetExternalValueOk

`func (o *ConversionCodeMappingType) GetExternalValueOk() (*string, bool)`

GetExternalValueOk returns a tuple with the ExternalValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalValue

`func (o *ConversionCodeMappingType) SetExternalValue(v string)`

SetExternalValue sets ExternalValue field to given value.

### HasExternalValue

`func (o *ConversionCodeMappingType) HasExternalValue() bool`

HasExternalValue returns a boolean if a field has been set.

### GetOperaColumn

`func (o *ConversionCodeMappingType) GetOperaColumn() string`

GetOperaColumn returns the OperaColumn field if non-nil, zero value otherwise.

### GetOperaColumnOk

`func (o *ConversionCodeMappingType) GetOperaColumnOk() (*string, bool)`

GetOperaColumnOk returns a tuple with the OperaColumn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaColumn

`func (o *ConversionCodeMappingType) SetOperaColumn(v string)`

SetOperaColumn sets OperaColumn field to given value.

### HasOperaColumn

`func (o *ConversionCodeMappingType) HasOperaColumn() bool`

HasOperaColumn returns a boolean if a field has been set.

### GetExternalFieldName

`func (o *ConversionCodeMappingType) GetExternalFieldName() string`

GetExternalFieldName returns the ExternalFieldName field if non-nil, zero value otherwise.

### GetExternalFieldNameOk

`func (o *ConversionCodeMappingType) GetExternalFieldNameOk() (*string, bool)`

GetExternalFieldNameOk returns a tuple with the ExternalFieldName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalFieldName

`func (o *ConversionCodeMappingType) SetExternalFieldName(v string)`

SetExternalFieldName sets ExternalFieldName field to given value.

### HasExternalFieldName

`func (o *ConversionCodeMappingType) HasExternalFieldName() bool`

HasExternalFieldName returns a boolean if a field has been set.

### GetProfileType

`func (o *ConversionCodeMappingType) GetProfileType() string`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ConversionCodeMappingType) GetProfileTypeOk() (*string, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ConversionCodeMappingType) SetProfileType(v string)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ConversionCodeMappingType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetOperaToExternalDefault

`func (o *ConversionCodeMappingType) GetOperaToExternalDefault() bool`

GetOperaToExternalDefault returns the OperaToExternalDefault field if non-nil, zero value otherwise.

### GetOperaToExternalDefaultOk

`func (o *ConversionCodeMappingType) GetOperaToExternalDefaultOk() (*bool, bool)`

GetOperaToExternalDefaultOk returns a tuple with the OperaToExternalDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaToExternalDefault

`func (o *ConversionCodeMappingType) SetOperaToExternalDefault(v bool)`

SetOperaToExternalDefault sets OperaToExternalDefault field to given value.

### HasOperaToExternalDefault

`func (o *ConversionCodeMappingType) HasOperaToExternalDefault() bool`

HasOperaToExternalDefault returns a boolean if a field has been set.

### GetExternalToOperaDefault

`func (o *ConversionCodeMappingType) GetExternalToOperaDefault() bool`

GetExternalToOperaDefault returns the ExternalToOperaDefault field if non-nil, zero value otherwise.

### GetExternalToOperaDefaultOk

`func (o *ConversionCodeMappingType) GetExternalToOperaDefaultOk() (*bool, bool)`

GetExternalToOperaDefaultOk returns a tuple with the ExternalToOperaDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalToOperaDefault

`func (o *ConversionCodeMappingType) SetExternalToOperaDefault(v bool)`

SetExternalToOperaDefault sets ExternalToOperaDefault field to given value.

### HasExternalToOperaDefault

`func (o *ConversionCodeMappingType) HasExternalToOperaDefault() bool`

HasExternalToOperaDefault returns a boolean if a field has been set.

### GetOverrideExternalDefault

`func (o *ConversionCodeMappingType) GetOverrideExternalDefault() bool`

GetOverrideExternalDefault returns the OverrideExternalDefault field if non-nil, zero value otherwise.

### GetOverrideExternalDefaultOk

`func (o *ConversionCodeMappingType) GetOverrideExternalDefaultOk() (*bool, bool)`

GetOverrideExternalDefaultOk returns a tuple with the OverrideExternalDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideExternalDefault

`func (o *ConversionCodeMappingType) SetOverrideExternalDefault(v bool)`

SetOverrideExternalDefault sets OverrideExternalDefault field to given value.

### HasOverrideExternalDefault

`func (o *ConversionCodeMappingType) HasOverrideExternalDefault() bool`

HasOverrideExternalDefault returns a boolean if a field has been set.

### GetOverrideOperaDefault

`func (o *ConversionCodeMappingType) GetOverrideOperaDefault() bool`

GetOverrideOperaDefault returns the OverrideOperaDefault field if non-nil, zero value otherwise.

### GetOverrideOperaDefaultOk

`func (o *ConversionCodeMappingType) GetOverrideOperaDefaultOk() (*bool, bool)`

GetOverrideOperaDefaultOk returns a tuple with the OverrideOperaDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideOperaDefault

`func (o *ConversionCodeMappingType) SetOverrideOperaDefault(v bool)`

SetOverrideOperaDefault sets OverrideOperaDefault field to given value.

### HasOverrideOperaDefault

`func (o *ConversionCodeMappingType) HasOverrideOperaDefault() bool`

HasOverrideOperaDefault returns a boolean if a field has been set.

### GetActive

`func (o *ConversionCodeMappingType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ConversionCodeMappingType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ConversionCodeMappingType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ConversionCodeMappingType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetIFCCreated

`func (o *ConversionCodeMappingType) GetIFCCreated() bool`

GetIFCCreated returns the IFCCreated field if non-nil, zero value otherwise.

### GetIFCCreatedOk

`func (o *ConversionCodeMappingType) GetIFCCreatedOk() (*bool, bool)`

GetIFCCreatedOk returns a tuple with the IFCCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIFCCreated

`func (o *ConversionCodeMappingType) SetIFCCreated(v bool)`

SetIFCCreated sets IFCCreated field to given value.

### HasIFCCreated

`func (o *ConversionCodeMappingType) HasIFCCreated() bool`

HasIFCCreated returns a boolean if a field has been set.

### GetMasterValue

`func (o *ConversionCodeMappingType) GetMasterValue() string`

GetMasterValue returns the MasterValue field if non-nil, zero value otherwise.

### GetMasterValueOk

`func (o *ConversionCodeMappingType) GetMasterValueOk() (*string, bool)`

GetMasterValueOk returns a tuple with the MasterValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterValue

`func (o *ConversionCodeMappingType) SetMasterValue(v string)`

SetMasterValue sets MasterValue field to given value.

### HasMasterValue

`func (o *ConversionCodeMappingType) HasMasterValue() bool`

HasMasterValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



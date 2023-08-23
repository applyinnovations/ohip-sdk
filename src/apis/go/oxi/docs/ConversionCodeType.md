# ConversionCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the Property. | [optional] 
**InterfaceId** | Pointer to **string** | Identifier of the Interface. | [optional] 
**ConversionCode** | Pointer to **string** | Type of Conversion Code or user-defined function (UDF) module name configured in the system. | [optional] 
**UDFCode** | Pointer to **bool** | A flag that is true if the conversion code is an user-defined function (UDF) module code. | [optional] 
**Label** | Pointer to **string** | Label of the Conversion Code that is displayed in UI. | [optional] 
**Description** | Pointer to **string** | Description of the Conversion Code. | [optional] 
**Active** | Pointer to **bool** | A field that distinguishes active and inactive Conversion Codes. | [optional] 
**Group** | Pointer to **string** | XML Types for the Conversion Code. | [optional] 
**Master** | Pointer to [**ConversionCodeMasterType**](ConversionCodeMasterType.md) |  | [optional] 

## Methods

### NewConversionCodeType

`func NewConversionCodeType() *ConversionCodeType`

NewConversionCodeType instantiates a new ConversionCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConversionCodeTypeWithDefaults

`func NewConversionCodeTypeWithDefaults() *ConversionCodeType`

NewConversionCodeTypeWithDefaults instantiates a new ConversionCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ConversionCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConversionCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConversionCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConversionCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInterfaceId

`func (o *ConversionCodeType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *ConversionCodeType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *ConversionCodeType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *ConversionCodeType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetConversionCode

`func (o *ConversionCodeType) GetConversionCode() string`

GetConversionCode returns the ConversionCode field if non-nil, zero value otherwise.

### GetConversionCodeOk

`func (o *ConversionCodeType) GetConversionCodeOk() (*string, bool)`

GetConversionCodeOk returns a tuple with the ConversionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCode

`func (o *ConversionCodeType) SetConversionCode(v string)`

SetConversionCode sets ConversionCode field to given value.

### HasConversionCode

`func (o *ConversionCodeType) HasConversionCode() bool`

HasConversionCode returns a boolean if a field has been set.

### GetUDFCode

`func (o *ConversionCodeType) GetUDFCode() bool`

GetUDFCode returns the UDFCode field if non-nil, zero value otherwise.

### GetUDFCodeOk

`func (o *ConversionCodeType) GetUDFCodeOk() (*bool, bool)`

GetUDFCodeOk returns a tuple with the UDFCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFCode

`func (o *ConversionCodeType) SetUDFCode(v bool)`

SetUDFCode sets UDFCode field to given value.

### HasUDFCode

`func (o *ConversionCodeType) HasUDFCode() bool`

HasUDFCode returns a boolean if a field has been set.

### GetLabel

`func (o *ConversionCodeType) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *ConversionCodeType) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *ConversionCodeType) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *ConversionCodeType) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetDescription

`func (o *ConversionCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConversionCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConversionCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConversionCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetActive

`func (o *ConversionCodeType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ConversionCodeType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ConversionCodeType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ConversionCodeType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetGroup

`func (o *ConversionCodeType) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *ConversionCodeType) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *ConversionCodeType) SetGroup(v string)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *ConversionCodeType) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetMaster

`func (o *ConversionCodeType) GetMaster() ConversionCodeMasterType`

GetMaster returns the Master field if non-nil, zero value otherwise.

### GetMasterOk

`func (o *ConversionCodeType) GetMasterOk() (*ConversionCodeMasterType, bool)`

GetMasterOk returns a tuple with the Master field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaster

`func (o *ConversionCodeType) SetMaster(v ConversionCodeMasterType)`

SetMaster sets Master field to given value.

### HasMaster

`func (o *ConversionCodeType) HasMaster() bool`

HasMaster returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



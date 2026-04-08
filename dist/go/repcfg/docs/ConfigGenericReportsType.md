# ConfigGenericReportsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Report** | Pointer to [**[]ConfigGenericReportType**](ConfigGenericReportType.md) | A generic report. | [optional] 
**HotelId** | Pointer to **string** | Hotel code in which reports to be set up belong to. | [optional] 
**ChainCode** | Pointer to **string** | Chain code in which reports to be set up belong to. | [optional] 

## Methods

### NewConfigGenericReportsType

`func NewConfigGenericReportsType() *ConfigGenericReportsType`

NewConfigGenericReportsType instantiates a new ConfigGenericReportsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigGenericReportsTypeWithDefaults

`func NewConfigGenericReportsTypeWithDefaults() *ConfigGenericReportsType`

NewConfigGenericReportsTypeWithDefaults instantiates a new ConfigGenericReportsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReport

`func (o *ConfigGenericReportsType) GetReport() []ConfigGenericReportType`

GetReport returns the Report field if non-nil, zero value otherwise.

### GetReportOk

`func (o *ConfigGenericReportsType) GetReportOk() (*[]ConfigGenericReportType, bool)`

GetReportOk returns a tuple with the Report field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReport

`func (o *ConfigGenericReportsType) SetReport(v []ConfigGenericReportType)`

SetReport sets Report field to given value.

### HasReport

`func (o *ConfigGenericReportsType) HasReport() bool`

HasReport returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigGenericReportsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigGenericReportsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigGenericReportsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigGenericReportsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetChainCode

`func (o *ConfigGenericReportsType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *ConfigGenericReportsType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *ConfigGenericReportsType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *ConfigGenericReportsType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ExchangeStatReportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Stat** | Pointer to [**[]ExchangeStatType**](ExchangeStatType.md) |  | [optional] 
**ReportCode** | Pointer to [**ExchangeStatReportCodeType**](ExchangeStatReportCodeType.md) |  | [optional] 
**Start** | Pointer to **string** |  | [optional] 
**End** | Pointer to **string** |  | [optional] 

## Methods

### NewExchangeStatReportType

`func NewExchangeStatReportType() *ExchangeStatReportType`

NewExchangeStatReportType instantiates a new ExchangeStatReportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExchangeStatReportTypeWithDefaults

`func NewExchangeStatReportTypeWithDefaults() *ExchangeStatReportType`

NewExchangeStatReportTypeWithDefaults instantiates a new ExchangeStatReportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStat

`func (o *ExchangeStatReportType) GetStat() []ExchangeStatType`

GetStat returns the Stat field if non-nil, zero value otherwise.

### GetStatOk

`func (o *ExchangeStatReportType) GetStatOk() (*[]ExchangeStatType, bool)`

GetStatOk returns a tuple with the Stat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStat

`func (o *ExchangeStatReportType) SetStat(v []ExchangeStatType)`

SetStat sets Stat field to given value.

### HasStat

`func (o *ExchangeStatReportType) HasStat() bool`

HasStat returns a boolean if a field has been set.

### GetReportCode

`func (o *ExchangeStatReportType) GetReportCode() ExchangeStatReportCodeType`

GetReportCode returns the ReportCode field if non-nil, zero value otherwise.

### GetReportCodeOk

`func (o *ExchangeStatReportType) GetReportCodeOk() (*ExchangeStatReportCodeType, bool)`

GetReportCodeOk returns a tuple with the ReportCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportCode

`func (o *ExchangeStatReportType) SetReportCode(v ExchangeStatReportCodeType)`

SetReportCode sets ReportCode field to given value.

### HasReportCode

`func (o *ExchangeStatReportType) HasReportCode() bool`

HasReportCode returns a boolean if a field has been set.

### GetStart

`func (o *ExchangeStatReportType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *ExchangeStatReportType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *ExchangeStatReportType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *ExchangeStatReportType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *ExchangeStatReportType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *ExchangeStatReportType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *ExchangeStatReportType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *ExchangeStatReportType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



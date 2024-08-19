# ConfigRoutingInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code is used to identify a trx code arrangement. | [optional] 
**CompAccounting** | Pointer to **bool** | Determines if this is a comp routing code or a routing code. | [optional] 
**Covers** | Pointer to **float32** | Number of covers for this routing instruction. Null means no value has been specified. | [optional] 
**Daily** | Pointer to **bool** | Signifies whether a separate routing instruction has to be generated for each day of the stay. | [optional] 
**DaysOfWeek** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the trx code arrangement code. | [optional] 
**HotelId** | Pointer to **string** | Identifies the hotel code for which the trx code arrangement is specified. | [optional] 
**InheritAuthRateCode** | Pointer to **bool** | Reservation to inherit Rate Code from Authorizer. | [optional] 
**Limit** | Pointer to **float32** | Allowable credit amount for this routing instruction. Null means no value has been specified. | [optional] 
**Percent** | Pointer to **float32** | The routing limit percentage allowed for this routing instruction. Null means no value has been specified. | [optional] 
**TransactionCodes** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 

## Methods

### NewConfigRoutingInstructionType

`func NewConfigRoutingInstructionType() *ConfigRoutingInstructionType`

NewConfigRoutingInstructionType instantiates a new ConfigRoutingInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigRoutingInstructionTypeWithDefaults

`func NewConfigRoutingInstructionTypeWithDefaults() *ConfigRoutingInstructionType`

NewConfigRoutingInstructionTypeWithDefaults instantiates a new ConfigRoutingInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ConfigRoutingInstructionType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ConfigRoutingInstructionType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ConfigRoutingInstructionType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ConfigRoutingInstructionType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCompAccounting

`func (o *ConfigRoutingInstructionType) GetCompAccounting() bool`

GetCompAccounting returns the CompAccounting field if non-nil, zero value otherwise.

### GetCompAccountingOk

`func (o *ConfigRoutingInstructionType) GetCompAccountingOk() (*bool, bool)`

GetCompAccountingOk returns a tuple with the CompAccounting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAccounting

`func (o *ConfigRoutingInstructionType) SetCompAccounting(v bool)`

SetCompAccounting sets CompAccounting field to given value.

### HasCompAccounting

`func (o *ConfigRoutingInstructionType) HasCompAccounting() bool`

HasCompAccounting returns a boolean if a field has been set.

### GetCovers

`func (o *ConfigRoutingInstructionType) GetCovers() float32`

GetCovers returns the Covers field if non-nil, zero value otherwise.

### GetCoversOk

`func (o *ConfigRoutingInstructionType) GetCoversOk() (*float32, bool)`

GetCoversOk returns a tuple with the Covers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCovers

`func (o *ConfigRoutingInstructionType) SetCovers(v float32)`

SetCovers sets Covers field to given value.

### HasCovers

`func (o *ConfigRoutingInstructionType) HasCovers() bool`

HasCovers returns a boolean if a field has been set.

### GetDaily

`func (o *ConfigRoutingInstructionType) GetDaily() bool`

GetDaily returns the Daily field if non-nil, zero value otherwise.

### GetDailyOk

`func (o *ConfigRoutingInstructionType) GetDailyOk() (*bool, bool)`

GetDailyOk returns a tuple with the Daily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaily

`func (o *ConfigRoutingInstructionType) SetDaily(v bool)`

SetDaily sets Daily field to given value.

### HasDaily

`func (o *ConfigRoutingInstructionType) HasDaily() bool`

HasDaily returns a boolean if a field has been set.

### GetDaysOfWeek

`func (o *ConfigRoutingInstructionType) GetDaysOfWeek() TimeSpanDaysOfWeekType`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *ConfigRoutingInstructionType) GetDaysOfWeekOk() (*TimeSpanDaysOfWeekType, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *ConfigRoutingInstructionType) SetDaysOfWeek(v TimeSpanDaysOfWeekType)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *ConfigRoutingInstructionType) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### GetDescription

`func (o *ConfigRoutingInstructionType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigRoutingInstructionType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigRoutingInstructionType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigRoutingInstructionType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigRoutingInstructionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigRoutingInstructionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigRoutingInstructionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigRoutingInstructionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInheritAuthRateCode

`func (o *ConfigRoutingInstructionType) GetInheritAuthRateCode() bool`

GetInheritAuthRateCode returns the InheritAuthRateCode field if non-nil, zero value otherwise.

### GetInheritAuthRateCodeOk

`func (o *ConfigRoutingInstructionType) GetInheritAuthRateCodeOk() (*bool, bool)`

GetInheritAuthRateCodeOk returns a tuple with the InheritAuthRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritAuthRateCode

`func (o *ConfigRoutingInstructionType) SetInheritAuthRateCode(v bool)`

SetInheritAuthRateCode sets InheritAuthRateCode field to given value.

### HasInheritAuthRateCode

`func (o *ConfigRoutingInstructionType) HasInheritAuthRateCode() bool`

HasInheritAuthRateCode returns a boolean if a field has been set.

### GetLimit

`func (o *ConfigRoutingInstructionType) GetLimit() float32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ConfigRoutingInstructionType) GetLimitOk() (*float32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ConfigRoutingInstructionType) SetLimit(v float32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ConfigRoutingInstructionType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetPercent

`func (o *ConfigRoutingInstructionType) GetPercent() float32`

GetPercent returns the Percent field if non-nil, zero value otherwise.

### GetPercentOk

`func (o *ConfigRoutingInstructionType) GetPercentOk() (*float32, bool)`

GetPercentOk returns a tuple with the Percent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercent

`func (o *ConfigRoutingInstructionType) SetPercent(v float32)`

SetPercent sets Percent field to given value.

### HasPercent

`func (o *ConfigRoutingInstructionType) HasPercent() bool`

HasPercent returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *ConfigRoutingInstructionType) GetTransactionCodes() []TrxInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *ConfigRoutingInstructionType) GetTransactionCodesOk() (*[]TrxInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *ConfigRoutingInstructionType) SetTransactionCodes(v []TrxInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *ConfigRoutingInstructionType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



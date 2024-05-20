# CustomChargeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** | Flag specifying if custom charge code is active or not. | [optional] 
**CustomChargeCode** | Pointer to **string** | Code is used to identify the Custom Charge. | [optional] 
**CustomChargeRuleType** | Pointer to [**CustomChargeRuleTypeType**](CustomChargeRuleTypeType.md) |  | [optional] 
**DateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**Description** | Pointer to **string** | Description for the Custom Charge code. | [optional] 
**HotelId** | Pointer to **string** | Identifies the hotel code for which the Custom Charge code is specified. | [optional] 
**Price** | Pointer to **float32** | Identifies the price for which the Custom Charge code is specified. | [optional] 
**Priority** | Pointer to **int32** | Identifies the priority for which the Custom Charge code is specified. | [optional] 

## Methods

### NewCustomChargeType

`func NewCustomChargeType() *CustomChargeType`

NewCustomChargeType instantiates a new CustomChargeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomChargeTypeWithDefaults

`func NewCustomChargeTypeWithDefaults() *CustomChargeType`

NewCustomChargeTypeWithDefaults instantiates a new CustomChargeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *CustomChargeType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CustomChargeType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CustomChargeType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *CustomChargeType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCustomChargeCode

`func (o *CustomChargeType) GetCustomChargeCode() string`

GetCustomChargeCode returns the CustomChargeCode field if non-nil, zero value otherwise.

### GetCustomChargeCodeOk

`func (o *CustomChargeType) GetCustomChargeCodeOk() (*string, bool)`

GetCustomChargeCodeOk returns a tuple with the CustomChargeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeCode

`func (o *CustomChargeType) SetCustomChargeCode(v string)`

SetCustomChargeCode sets CustomChargeCode field to given value.

### HasCustomChargeCode

`func (o *CustomChargeType) HasCustomChargeCode() bool`

HasCustomChargeCode returns a boolean if a field has been set.

### GetCustomChargeRuleType

`func (o *CustomChargeType) GetCustomChargeRuleType() CustomChargeRuleTypeType`

GetCustomChargeRuleType returns the CustomChargeRuleType field if non-nil, zero value otherwise.

### GetCustomChargeRuleTypeOk

`func (o *CustomChargeType) GetCustomChargeRuleTypeOk() (*CustomChargeRuleTypeType, bool)`

GetCustomChargeRuleTypeOk returns a tuple with the CustomChargeRuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeRuleType

`func (o *CustomChargeType) SetCustomChargeRuleType(v CustomChargeRuleTypeType)`

SetCustomChargeRuleType sets CustomChargeRuleType field to given value.

### HasCustomChargeRuleType

`func (o *CustomChargeType) HasCustomChargeRuleType() bool`

HasCustomChargeRuleType returns a boolean if a field has been set.

### GetDateRange

`func (o *CustomChargeType) GetDateRange() DateRangeType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *CustomChargeType) GetDateRangeOk() (*DateRangeType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *CustomChargeType) SetDateRange(v DateRangeType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *CustomChargeType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetDescription

`func (o *CustomChargeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CustomChargeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CustomChargeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CustomChargeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *CustomChargeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CustomChargeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CustomChargeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CustomChargeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPrice

`func (o *CustomChargeType) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *CustomChargeType) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *CustomChargeType) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *CustomChargeType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetPriority

`func (o *CustomChargeType) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *CustomChargeType) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *CustomChargeType) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *CustomChargeType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



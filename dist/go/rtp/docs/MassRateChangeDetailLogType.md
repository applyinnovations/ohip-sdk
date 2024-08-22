# MassRateChangeDetailLogType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Message details. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate Code. | [optional] 
**Status** | Pointer to [**MassRateChangeRecordStatusType**](MassRateChangeRecordStatusType.md) |  | [optional] 

## Methods

### NewMassRateChangeDetailLogType

`func NewMassRateChangeDetailLogType() *MassRateChangeDetailLogType`

NewMassRateChangeDetailLogType instantiates a new MassRateChangeDetailLogType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassRateChangeDetailLogTypeWithDefaults

`func NewMassRateChangeDetailLogTypeWithDefaults() *MassRateChangeDetailLogType`

NewMassRateChangeDetailLogTypeWithDefaults instantiates a new MassRateChangeDetailLogType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *MassRateChangeDetailLogType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MassRateChangeDetailLogType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MassRateChangeDetailLogType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MassRateChangeDetailLogType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *MassRateChangeDetailLogType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *MassRateChangeDetailLogType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *MassRateChangeDetailLogType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *MassRateChangeDetailLogType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetStatus

`func (o *MassRateChangeDetailLogType) GetStatus() MassRateChangeRecordStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *MassRateChangeDetailLogType) GetStatusOk() (*MassRateChangeRecordStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *MassRateChangeDetailLogType) SetStatus(v MassRateChangeRecordStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *MassRateChangeDetailLogType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



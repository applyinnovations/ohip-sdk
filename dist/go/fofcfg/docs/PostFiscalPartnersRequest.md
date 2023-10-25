# PostFiscalPartnersRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalPeriods** | Pointer to [**[]FiscalPartnerType**](FiscalPartnerType.md) | Details of Fiscal Partners. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostFiscalPartnersRequest

`func NewPostFiscalPartnersRequest() *PostFiscalPartnersRequest`

NewPostFiscalPartnersRequest instantiates a new PostFiscalPartnersRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostFiscalPartnersRequestWithDefaults

`func NewPostFiscalPartnersRequestWithDefaults() *PostFiscalPartnersRequest`

NewPostFiscalPartnersRequestWithDefaults instantiates a new PostFiscalPartnersRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalPeriods

`func (o *PostFiscalPartnersRequest) GetFiscalPeriods() []FiscalPartnerType`

GetFiscalPeriods returns the FiscalPeriods field if non-nil, zero value otherwise.

### GetFiscalPeriodsOk

`func (o *PostFiscalPartnersRequest) GetFiscalPeriodsOk() (*[]FiscalPartnerType, bool)`

GetFiscalPeriodsOk returns a tuple with the FiscalPeriods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPeriods

`func (o *PostFiscalPartnersRequest) SetFiscalPeriods(v []FiscalPartnerType)`

SetFiscalPeriods sets FiscalPeriods field to given value.

### HasFiscalPeriods

`func (o *PostFiscalPartnersRequest) HasFiscalPeriods() bool`

HasFiscalPeriods returns a boolean if a field has been set.

### GetWarnings

`func (o *PostFiscalPartnersRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostFiscalPartnersRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostFiscalPartnersRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostFiscalPartnersRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



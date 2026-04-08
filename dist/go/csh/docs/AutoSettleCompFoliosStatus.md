# AutoSettleCompFoliosStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Folios** | Pointer to [**[]AutoSettleCompFolioType**](AutoSettleCompFolioType.md) | Information about comp folio that was auto settled. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAutoSettleCompFoliosStatus

`func NewAutoSettleCompFoliosStatus() *AutoSettleCompFoliosStatus`

NewAutoSettleCompFoliosStatus instantiates a new AutoSettleCompFoliosStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoSettleCompFoliosStatusWithDefaults

`func NewAutoSettleCompFoliosStatusWithDefaults() *AutoSettleCompFoliosStatus`

NewAutoSettleCompFoliosStatusWithDefaults instantiates a new AutoSettleCompFoliosStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolios

`func (o *AutoSettleCompFoliosStatus) GetFolios() []AutoSettleCompFolioType`

GetFolios returns the Folios field if non-nil, zero value otherwise.

### GetFoliosOk

`func (o *AutoSettleCompFoliosStatus) GetFoliosOk() (*[]AutoSettleCompFolioType, bool)`

GetFoliosOk returns a tuple with the Folios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolios

`func (o *AutoSettleCompFoliosStatus) SetFolios(v []AutoSettleCompFolioType)`

SetFolios sets Folios field to given value.

### HasFolios

`func (o *AutoSettleCompFoliosStatus) HasFolios() bool`

HasFolios returns a boolean if a field has been set.

### GetWarnings

`func (o *AutoSettleCompFoliosStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AutoSettleCompFoliosStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AutoSettleCompFoliosStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AutoSettleCompFoliosStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



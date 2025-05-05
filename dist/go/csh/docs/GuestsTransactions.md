# GuestsTransactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationFolioInformation** | Pointer to [**[]ReservationFolioInfoType**](ReservationFolioInfoType.md) | Folio details for the requested reservation/s. | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuestsTransactions

`func NewGuestsTransactions() *GuestsTransactions`

NewGuestsTransactions instantiates a new GuestsTransactions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestsTransactionsWithDefaults

`func NewGuestsTransactionsWithDefaults() *GuestsTransactions`

NewGuestsTransactionsWithDefaults instantiates a new GuestsTransactions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationFolioInformation

`func (o *GuestsTransactions) GetReservationFolioInformation() []ReservationFolioInfoType`

GetReservationFolioInformation returns the ReservationFolioInformation field if non-nil, zero value otherwise.

### GetReservationFolioInformationOk

`func (o *GuestsTransactions) GetReservationFolioInformationOk() (*[]ReservationFolioInfoType, bool)`

GetReservationFolioInformationOk returns a tuple with the ReservationFolioInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationFolioInformation

`func (o *GuestsTransactions) SetReservationFolioInformation(v []ReservationFolioInfoType)`

SetReservationFolioInformation sets ReservationFolioInformation field to given value.

### HasReservationFolioInformation

`func (o *GuestsTransactions) HasReservationFolioInformation() bool`

HasReservationFolioInformation returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *GuestsTransactions) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *GuestsTransactions) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *GuestsTransactions) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *GuestsTransactions) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *GuestsTransactions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuestsTransactions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuestsTransactions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuestsTransactions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuestsTransactions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuestsTransactions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuestsTransactions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuestsTransactions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



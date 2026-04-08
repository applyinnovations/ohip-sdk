# Folio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationFolioInformation** | Pointer to [**ReservationFolioInfoType**](ReservationFolioInfoType.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolio

`func NewFolio() *Folio`

NewFolio instantiates a new Folio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioWithDefaults

`func NewFolioWithDefaults() *Folio`

NewFolioWithDefaults instantiates a new Folio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationFolioInformation

`func (o *Folio) GetReservationFolioInformation() ReservationFolioInfoType`

GetReservationFolioInformation returns the ReservationFolioInformation field if non-nil, zero value otherwise.

### GetReservationFolioInformationOk

`func (o *Folio) GetReservationFolioInformationOk() (*ReservationFolioInfoType, bool)`

GetReservationFolioInformationOk returns a tuple with the ReservationFolioInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationFolioInformation

`func (o *Folio) SetReservationFolioInformation(v ReservationFolioInfoType)`

SetReservationFolioInformation sets ReservationFolioInformation field to given value.

### HasReservationFolioInformation

`func (o *Folio) HasReservationFolioInformation() bool`

HasReservationFolioInformation returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *Folio) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *Folio) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *Folio) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *Folio) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *Folio) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Folio) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Folio) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Folio) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Folio) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Folio) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Folio) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Folio) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



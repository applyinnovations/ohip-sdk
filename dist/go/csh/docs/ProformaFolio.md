# ProformaFolio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationFolioInformation** | Pointer to [**ReservationFolioInfoType**](ReservationFolioInfoType.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProformaFolio

`func NewProformaFolio() *ProformaFolio`

NewProformaFolio instantiates a new ProformaFolio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProformaFolioWithDefaults

`func NewProformaFolioWithDefaults() *ProformaFolio`

NewProformaFolioWithDefaults instantiates a new ProformaFolio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationFolioInformation

`func (o *ProformaFolio) GetReservationFolioInformation() ReservationFolioInfoType`

GetReservationFolioInformation returns the ReservationFolioInformation field if non-nil, zero value otherwise.

### GetReservationFolioInformationOk

`func (o *ProformaFolio) GetReservationFolioInformationOk() (*ReservationFolioInfoType, bool)`

GetReservationFolioInformationOk returns a tuple with the ReservationFolioInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationFolioInformation

`func (o *ProformaFolio) SetReservationFolioInformation(v ReservationFolioInfoType)`

SetReservationFolioInformation sets ReservationFolioInformation field to given value.

### HasReservationFolioInformation

`func (o *ProformaFolio) HasReservationFolioInformation() bool`

HasReservationFolioInformation returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *ProformaFolio) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *ProformaFolio) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *ProformaFolio) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *ProformaFolio) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ProformaFolio) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProformaFolio) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProformaFolio) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProformaFolio) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProformaFolio) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProformaFolio) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProformaFolio) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProformaFolio) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


